/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IMemberAccountInterface extends utils.Interface {
  functions: {
    "bidSigner()": FunctionFragment;
    "claimRefundSigner()": FunctionFragment;
    "createMR(uint256)": FunctionFragment;
    "getMRValue(uint256)": FunctionFragment;
    "getMoneyRecordState(uint256)": FunctionFragment;
    "getSignIndex()": FunctionFragment;
    "getSignKey()": FunctionFragment;
    "increaseSignIndex(uint256)": FunctionFragment;
    "lockMR(uint256)": FunctionFragment;
    "onBoard(uint256,uint256,uint256,uint256)": FunctionFragment;
    "processMR(uint256)": FunctionFragment;
    "receiveTransaction(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "registerInitialMember(uint256)": FunctionFragment;
    "sendReferRequest(uint256,uint256,uint256,uint256)": FunctionFragment;
    "sendTransaction(uint256,uint256,uint256,uint256)": FunctionFragment;
    "setSignIndex(uint256)": FunctionFragment;
    "signReferRequest(uint256,uint256,uint256,uint256)": FunctionFragment;
    "signTransaction(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "startRequestRefer(address,uint256,uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unlockMR(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bidSigner"
      | "claimRefundSigner"
      | "createMR"
      | "getMRValue"
      | "getMoneyRecordState"
      | "getSignIndex"
      | "getSignKey"
      | "increaseSignIndex"
      | "lockMR"
      | "onBoard"
      | "processMR"
      | "receiveTransaction"
      | "registerInitialMember"
      | "sendReferRequest"
      | "sendTransaction"
      | "setSignIndex"
      | "signReferRequest"
      | "signTransaction"
      | "startRequestRefer"
      | "supportsInterface"
      | "unlockMR"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bidSigner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimRefundSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createMR",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMRValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMoneyRecordState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSignIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSignKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseSignIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockMR",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onBoard",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "processMR",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveTransaction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerInitialMember",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendReferRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendTransaction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSignIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "signReferRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "signTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startRequestRefer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockMR",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "bidSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRefundSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createMR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMRValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMoneyRecordState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSignKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseSignIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockMR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onBoard", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "processMR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerInitialMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendReferRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSignIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signReferRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRequestRefer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlockMR", data: BytesLike): Result;

  events: {};
}

export interface IMemberAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMemberAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bidSigner(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimRefundSigner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createMR(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMRValue(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMoneyRecordState(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getSignIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSignKey(overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseSignIndex(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onBoard(
      e: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    processMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    receiveTransaction(
      money: PromiseOrValue<BigNumberish>,
      rho: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      omega: PromiseOrValue<BigNumberish>,
      sigma: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerInitialMember(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendTransaction(
      index: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSignIndex(
      _signIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signTransaction(
      account: PromiseOrValue<string>,
      e: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startRequestRefer(
      account: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unlockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bidSigner(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimRefundSigner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createMR(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMRValue(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMoneyRecordState(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getSignIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getSignKey(overrides?: CallOverrides): Promise<BigNumber>;

  increaseSignIndex(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockMR(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onBoard(
    e: PromiseOrValue<BigNumberish>,
    s: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  processMR(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  receiveTransaction(
    money: PromiseOrValue<BigNumberish>,
    rho: PromiseOrValue<BigNumberish>,
    delta: PromiseOrValue<BigNumberish>,
    omega: PromiseOrValue<BigNumberish>,
    sigma: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerInitialMember(
    value: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendReferRequest(
    nonce: PromiseOrValue<BigNumberish>,
    e: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendTransaction(
    index: PromiseOrValue<BigNumberish>,
    e: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSignIndex(
    _signIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signReferRequest(
    nonce: PromiseOrValue<BigNumberish>,
    s: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signTransaction(
    account: PromiseOrValue<string>,
    e: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startRequestRefer(
    account: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    sigR: PromiseOrValue<BigNumberish>,
    sigS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unlockMR(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bidSigner(overrides?: CallOverrides): Promise<void>;

    claimRefundSigner(overrides?: CallOverrides): Promise<void>;

    createMR(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getMRValue(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMoneyRecordState(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getSignIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getSignKey(overrides?: CallOverrides): Promise<BigNumber>;

    increaseSignIndex(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onBoard(
      e: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    processMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    receiveTransaction(
      money: PromiseOrValue<BigNumberish>,
      rho: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      omega: PromiseOrValue<BigNumberish>,
      sigma: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerInitialMember(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendTransaction(
      index: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSignIndex(
      _signIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    signReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    signTransaction(
      account: PromiseOrValue<string>,
      e: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startRequestRefer(
      account: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unlockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    bidSigner(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimRefundSigner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createMR(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMRValue(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMoneyRecordState(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSignIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getSignKey(overrides?: CallOverrides): Promise<BigNumber>;

    increaseSignIndex(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onBoard(
      e: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    processMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    receiveTransaction(
      money: PromiseOrValue<BigNumberish>,
      rho: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      omega: PromiseOrValue<BigNumberish>,
      sigma: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerInitialMember(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendTransaction(
      index: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSignIndex(
      _signIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signTransaction(
      account: PromiseOrValue<string>,
      e: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startRequestRefer(
      account: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bidSigner(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimRefundSigner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createMR(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMRValue(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMoneyRecordState(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSignIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSignKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseSignIndex(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onBoard(
      e: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    processMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    receiveTransaction(
      money: PromiseOrValue<BigNumberish>,
      rho: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      omega: PromiseOrValue<BigNumberish>,
      sigma: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerInitialMember(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendTransaction(
      index: PromiseOrValue<BigNumberish>,
      e: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSignIndex(
      _signIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signReferRequest(
      nonce: PromiseOrValue<BigNumberish>,
      s: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signTransaction(
      account: PromiseOrValue<string>,
      e: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startRequestRefer(
      account: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      sigR: PromiseOrValue<BigNumberish>,
      sigS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockMR(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}