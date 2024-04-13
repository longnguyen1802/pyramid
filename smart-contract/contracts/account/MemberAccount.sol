// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "../cryptography/Elgama.sol";
import "../interfaces/IProtocol.sol";
import "../interfaces/IMemberAccount.sol";

contract MemberAccount is IMemberAccount {
    mapping(address => uint256) allowances;
    // Normal account information
    address immutable protocol;
    uint256 immutable sendKey;
    uint256 immutable receiveKey;

    // Money record
    uint256 totalURT;
    mapping(uint256 => MR) moneyRecord;

    // Signer support information
    uint256 immutable pubKey;
    uint256 immutable signNonce;
    uint256 signIndex;
    uint256 immutable signerDepositFee;

    // Elgama signature for checking send/receive/refer request
    Elgama elgama;

    constructor(
        address _protocol,
        uint256 _pubKey,
        uint256 _sendKey,
        uint256 _receiveKey,
        uint256 _signNonce,
        uint256 _signerDepositFee
    ) {
        require(_protocol != address(0));
        protocol = _protocol;
        pubKey = _pubKey;
        sendKey = _sendKey;
        receiveKey = _receiveKey;
        signIndex = block.timestamp;
        signNonce = _signNonce;
        signerDepositFee = _signerDepositFee;
    }

    function getSignIndex() public view returns (uint256) {
        return signIndex;
    }

    function increaseSignerIndex(uint256 amount) external {
        signIndex += amount;
    }

    function getSignKey() public view returns (uint256) {
        return pubKey;
    }

    function processMR(uint256 index) external {
        require(msg.sender == protocol);
        require(moneyRecord[index].state == State.Lock);
        moneyRecord[index].state = State.InProcess;
    }

    function lockMR(uint256 index) external {
        require(msg.sender == protocol);
        moneyRecord[index].state = State.InProcess;
    }

    function unlockMR(uint256 index) external {
        require(msg.sender == protocol);
        require(moneyRecord[index].state == State.InProcess);
        moneyRecord[index].state = State.Unlock;
    }

    function getMoneyRecordState(uint256 index) public view returns (State) {
        return moneyRecord[index].state;
    }

    function getMRValue(uint256 index) public view returns (uint256) {
        return moneyRecord[index].money;
    }

    /**
     *
     * @param nonce Nonce for refer request
     * @param e Message for refer request
     * @param sigR Part of elgama signature
     * @param sigS Part of elgama signature
     */
    function sendReferRequest(
        uint256 nonce,
        uint256 e,
        uint256 sigR,
        uint256 sigS
    ) external {
        uint256 m = uint256(keccak256(abi.encode(nonce, e)));
        verifyElgamaSignature(elgama, m, sigR, sigS, receiveKey);
        IProtocol(protocol).sendReferRequest(nonce, e);
    }

    function onBoard(
        uint256 e,
        uint256 s,
        uint256 sigR,
        uint256 sigS
    ) external {
        uint256 m = uint256(keccak256(abi.encode(e, s)));
        verifyElgamaSignature(elgama, m, sigR, sigS, receiveKey);
        IProtocol(protocol).onboardMember(e, s);
    }

    function sendTransaction(
        uint256 index,
        uint256 e,
        uint256 sigR,
        uint256 sigS
    ) external {
        // Call the interface
        uint256 m = uint256(keccak256(abi.encode(index, e)));
        verifyElgamaSignature(elgama, m, sigR, sigS, sendKey);
        IProtocol(protocol).sendTransaction(index, e);
    }

    function receiveTransaction(
        uint256 money,
        uint256 rho,
        uint256 delta,
        uint256 omega,
        uint256 sigma,
        uint256 sigR,
        uint256 sigS
    ) external {
        // Call the interface
        uint256 m = uint256(keccak256(abi.encode(rho, delta, omega, sigma)));
        verifyElgamaSignature(elgama, m, sigR, sigS, receiveKey);
        IProtocol(protocol).receiveTransaction(money, rho, delta, omega, sigma);
    }

    function signTransaction(
        address account,
        uint256 e,
        uint256 r,
        uint256 sigR,
        uint256 sigS
    ) external {
        // Call the interface
        uint256 m = uint256(keccak256(abi.encode(account, e, r)));
        verifyElgamaSignature(elgama, m, sigR, sigS, pubKey);
        IProtocol(protocol).signTransaction(account, e, r);
    }

    function bidSigner() external payable {
        require(msg.value == signerDepositFee);
        IProtocol(protocol).bidForNextSigner();
    }

    function claimRefundSigner() external {
        IProtocol(protocol).refundUnsuccessSigner();
    }

    receive() external payable {}

    function approve(uint256 amount, uint256 sigR, uint256 sigS) external {
        uint256 m = uint256(keccak256(abi.encode(msg.sender, amount)));
        verifyElgamaSignature(elgama, m, sigR, sigS, receiveKey);
        allowances[msg.sender] += amount;
    }

    function withdraw(uint256 amount) external {
        require(
            amount <= allowances[msg.sender],
            "Insufficient contract balance"
        );
        allowances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }
}