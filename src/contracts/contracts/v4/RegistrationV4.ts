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

export interface RegistrationV4Interface extends utils.Interface {
  functions: {
    "getVersion()": FunctionFragment;
    "imx()": FunctionFragment;
    "isRegistered(uint256)": FunctionFragment;
    "registerAndWithdrawAll(address,uint256,bytes,uint256)": FunctionFragment;
    "registerAndWithdrawNft(address,uint256,bytes,uint256,uint256)": FunctionFragment;
    "registerWithdrawAndMint(address,uint256,bytes,uint256,bytes)": FunctionFragment;
    "withdrawAll(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getVersion"
      | "imx"
      | "isRegistered"
      | "registerAndWithdrawAll"
      | "registerAndWithdrawNft"
      | "registerWithdrawAndMint"
      | "withdrawAll"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "imx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isRegistered",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAndWithdrawAll",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAndWithdrawNft",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWithdrawAndMint",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "imx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAndWithdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAndWithdrawNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWithdrawAndMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RegistrationV4 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistrationV4Interface;

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
    getVersion(overrides?: CallOverrides): Promise<[string]>;

    imx(overrides?: CallOverrides): Promise<[string]>;

    isRegistered(
      starkKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerAndWithdrawAll(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerAndWithdrawNft(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerWithdrawAndMint(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      mintingBlob: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawAll(
      ethKey: PromiseOrValue<BigNumberish>,
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getVersion(overrides?: CallOverrides): Promise<string>;

  imx(overrides?: CallOverrides): Promise<string>;

  isRegistered(
    starkKey: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerAndWithdrawAll(
    ethKey: PromiseOrValue<string>,
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerAndWithdrawNft(
    ethKey: PromiseOrValue<string>,
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerWithdrawAndMint(
    ethKey: PromiseOrValue<string>,
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    mintingBlob: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawAll(
    ethKey: PromiseOrValue<BigNumberish>,
    starkKey: PromiseOrValue<BigNumberish>,
    assetType: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getVersion(overrides?: CallOverrides): Promise<string>;

    imx(overrides?: CallOverrides): Promise<string>;

    isRegistered(
      starkKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerAndWithdrawAll(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAndWithdrawNft(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerWithdrawAndMint(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      mintingBlob: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAll(
      ethKey: PromiseOrValue<BigNumberish>,
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    imx(overrides?: CallOverrides): Promise<BigNumber>;

    isRegistered(
      starkKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerAndWithdrawAll(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerAndWithdrawNft(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerWithdrawAndMint(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      mintingBlob: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawAll(
      ethKey: PromiseOrValue<BigNumberish>,
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    imx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRegistered(
      starkKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAndWithdrawAll(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerAndWithdrawNft(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerWithdrawAndMint(
      ethKey: PromiseOrValue<string>,
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      mintingBlob: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      ethKey: PromiseOrValue<BigNumberish>,
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
