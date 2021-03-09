/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface FlashProtocolInterface extends ethers.utils.Interface {
  functions: {
    "FLASH_TOKEN()": FunctionFragment;
    "TIMELOCK()": FunctionFragment;
    "TOKEN()": FunctionFragment;
    "balances(address)": FunctionFragment;
    "calculateMaxStakePeriod(uint256)": FunctionFragment;
    "getFPY(uint256)": FunctionFragment;
    "getMatchedAmount(uint256)": FunctionFragment;
    "getMintAmount(uint256,uint256)": FunctionFragment;
    "getPercentageStaked(uint256)": FunctionFragment;
    "lockFunction(uint8)": FunctionFragment;
    "matchRatio()": FunctionFragment;
    "matchReceiver()": FunctionFragment;
    "setMatchRatio(uint256)": FunctionFragment;
    "setMatchReceiver(address)": FunctionFragment;
    "stake(uint256,uint256,address,bytes)": FunctionFragment;
    "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)": FunctionFragment;
    "stakes(bytes32)": FunctionFragment;
    "timelock(uint8)": FunctionFragment;
    "unlockFunction(uint8)": FunctionFragment;
    "unstake(bytes32)": FunctionFragment;
    "unstakeEarly(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FLASH_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TIMELOCK", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateMaxStakePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFPY",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMatchedAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPercentageStaked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockFunction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "matchRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "matchReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMatchRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMatchReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeWithPermit",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "stakes", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "timelock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockFunction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unstake", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "unstakeEarly",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "FLASH_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TIMELOCK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateMaxStakePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFPY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMatchedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMintAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPercentageStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "matchRatio", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "matchReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMatchRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMatchReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakeEarly",
    data: BytesLike
  ): Result;

  events: {
    "Staked(bytes32,uint256,uint256,uint256,uint256,address,address)": EventFragment;
    "Unstaked(bytes32,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export class FlashProtocol extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FlashProtocolInterface;

  functions: {
    FLASH_TOKEN(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "FLASH_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    TIMELOCK(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "TIMELOCK()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    TOKEN(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "TOKEN()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    calculateMaxStakePeriod(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calculateMaxStakePeriod(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getFPY(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getFPY(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getMatchedAmount(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMatchedAmount(uint256)"(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getMintAmount(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMintAmount(uint256,uint256)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getPercentageStaked(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getPercentageStaked(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    matchRatio(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "matchRatio()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    matchReceiver(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "matchReceiver()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setMatchRatio(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMatchRatio(uint256)"(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMatchReceiver(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMatchReceiver(address)"(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stake(uint256,uint256,address,bytes)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeWithPermit(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)"(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amountIn: BigNumber;
      expiry: BigNumber;
      expireAfter: BigNumber;
      mintedAmount: BigNumber;
      staker: string;
      receiver: string;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
      5: string;
    }>;

    "stakes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amountIn: BigNumber;
      expiry: BigNumber;
      expireAfter: BigNumber;
      mintedAmount: BigNumber;
      staker: string;
      receiver: string;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
      5: string;
    }>;

    timelock(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "timelock(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    unlockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unlockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unstake(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unstake(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unstakeEarly(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unstakeEarly(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  FLASH_TOKEN(overrides?: CallOverrides): Promise<string>;

  "FLASH_TOKEN()"(overrides?: CallOverrides): Promise<string>;

  TIMELOCK(overrides?: CallOverrides): Promise<BigNumber>;

  "TIMELOCK()"(overrides?: CallOverrides): Promise<BigNumber>;

  TOKEN(overrides?: CallOverrides): Promise<string>;

  "TOKEN()"(overrides?: CallOverrides): Promise<string>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balances(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateMaxStakePeriod(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateMaxStakePeriod(uint256)"(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFPY(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getFPY(uint256)"(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMatchedAmount(
    _mintedAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMatchedAmount(uint256)"(
    _mintedAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMintAmount(
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMintAmount(uint256,uint256)"(
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPercentageStaked(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPercentageStaked(uint256)"(
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockFunction(
    _lockedFunction: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lockFunction(uint8)"(
    _lockedFunction: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  matchRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "matchRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  matchReceiver(overrides?: CallOverrides): Promise<string>;

  "matchReceiver()"(overrides?: CallOverrides): Promise<string>;

  setMatchRatio(
    _newMatchRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMatchRatio(uint256)"(
    _newMatchRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMatchReceiver(
    _newMatchReceiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMatchReceiver(address)"(
    _newMatchReceiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    _receiver: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stake(uint256,uint256,address,bytes)"(
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    _receiver: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeWithPermit(
    _receiver: string,
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    _deadline: BigNumberish,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)"(
    _receiver: string,
    _amountIn: BigNumberish,
    _expiry: BigNumberish,
    _deadline: BigNumberish,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakes(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    amountIn: BigNumber;
    expiry: BigNumber;
    expireAfter: BigNumber;
    mintedAmount: BigNumber;
    staker: string;
    receiver: string;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: string;
    5: string;
  }>;

  "stakes(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    amountIn: BigNumber;
    expiry: BigNumber;
    expireAfter: BigNumber;
    mintedAmount: BigNumber;
    staker: string;
    receiver: string;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: string;
    5: string;
  }>;

  timelock(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "timelock(uint8)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unlockFunction(
    _lockedFunction: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unlockFunction(uint8)"(
    _lockedFunction: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unstake(_id: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "unstake(bytes32)"(
    _id: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unstakeEarly(
    _id: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unstakeEarly(bytes32)"(
    _id: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    FLASH_TOKEN(overrides?: CallOverrides): Promise<string>;

    "FLASH_TOKEN()"(overrides?: CallOverrides): Promise<string>;

    TIMELOCK(overrides?: CallOverrides): Promise<BigNumber>;

    "TIMELOCK()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<string>;

    "TOKEN()"(overrides?: CallOverrides): Promise<string>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateMaxStakePeriod(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateMaxStakePeriod(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFPY(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFPY(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMatchedAmount(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMatchedAmount(uint256)"(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintAmount(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMintAmount(uint256,uint256)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPercentageStaked(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPercentageStaked(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockFunction(
      _lockedFunction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    matchRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "matchRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    matchReceiver(overrides?: CallOverrides): Promise<string>;

    "matchReceiver()"(overrides?: CallOverrides): Promise<string>;

    setMatchRatio(
      _newMatchRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMatchRatio(uint256)"(
      _newMatchRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMatchReceiver(
      _newMatchReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMatchReceiver(address)"(
      _newMatchReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: string;
    }>;

    "stake(uint256,uint256,address,bytes)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: string;
    }>;

    stakeWithPermit(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: string;
    }>;

    "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)"(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: string;
    }>;

    stakes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amountIn: BigNumber;
      expiry: BigNumber;
      expireAfter: BigNumber;
      mintedAmount: BigNumber;
      staker: string;
      receiver: string;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
      5: string;
    }>;

    "stakes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amountIn: BigNumber;
      expiry: BigNumber;
      expireAfter: BigNumber;
      mintedAmount: BigNumber;
      staker: string;
      receiver: string;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
      5: string;
    }>;

    timelock(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "timelock(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockFunction(
      _lockedFunction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "unlockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "unstake(bytes32)"(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeEarly(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "unstakeEarly(bytes32)"(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Staked(
      _id: null,
      _amountIn: null,
      _expiry: null,
      _expireAfter: null,
      _mintedAmount: null,
      _staker: string | null,
      _receiver: string | null
    ): EventFilter;

    Unstaked(_id: null, _amountIn: null, _staker: string | null): EventFilter;
  };

  estimateGas: {
    FLASH_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "FLASH_TOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    TIMELOCK(overrides?: CallOverrides): Promise<BigNumber>;

    "TIMELOCK()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "TOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateMaxStakePeriod(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateMaxStakePeriod(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFPY(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFPY(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMatchedAmount(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMatchedAmount(uint256)"(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintAmount(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMintAmount(uint256,uint256)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPercentageStaked(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPercentageStaked(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    matchRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "matchRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    matchReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    "matchReceiver()"(overrides?: CallOverrides): Promise<BigNumber>;

    setMatchRatio(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMatchRatio(uint256)"(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMatchReceiver(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMatchReceiver(address)"(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stake(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "stake(uint256,uint256,address,bytes)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeWithPermit(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)"(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakes(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "stakes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timelock(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "timelock(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unlockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unstake(_id: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "unstake(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unstakeEarly(_id: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "unstakeEarly(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FLASH_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "FLASH_TOKEN()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TIMELOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TIMELOCK()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TOKEN()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateMaxStakePeriod(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateMaxStakePeriod(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFPY(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFPY(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMatchedAmount(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMatchedAmount(uint256)"(
      _mintedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintAmount(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMintAmount(uint256,uint256)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPercentageStaked(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPercentageStaked(uint256)"(
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    matchRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "matchRatio()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    matchReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "matchReceiver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMatchRatio(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMatchRatio(uint256)"(
      _newMatchRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMatchReceiver(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMatchReceiver(address)"(
      _newMatchReceiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stake(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stake(uint256,uint256,address,bytes)"(
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _receiver: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeWithPermit(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stakeWithPermit(address,uint256,uint256,uint256,uint8,bytes32,bytes32,bytes)"(
      _receiver: string,
      _amountIn: BigNumberish,
      _expiry: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timelock(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "timelock(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockFunction(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unlockFunction(uint8)"(
      _lockedFunction: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unstake(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unstake(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unstakeEarly(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unstakeEarly(bytes32)"(
      _id: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
