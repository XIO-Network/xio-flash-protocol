/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer, BigNumberish} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {FlashProtocol} from "./FlashProtocol";

export class FlashProtocolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialMatchReceiver: string,
    _initialMatchRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<FlashProtocol> {
    return super.deploy(
      _initialMatchReceiver,
      _initialMatchRatio,
      overrides || {}
    ) as Promise<FlashProtocol>;
  }
  getDeployTransaction(
    _initialMatchReceiver: string,
    _initialMatchRatio: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialMatchReceiver,
      _initialMatchRatio,
      overrides || {}
    );
  }
  attach(address: string): FlashProtocol {
    return super.attach(address) as FlashProtocol;
  }
  connect(signer: Signer): FlashProtocolFactory {
    return super.connect(signer) as FlashProtocolFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashProtocol {
    return new Contract(address, _abi, signerOrProvider) as FlashProtocol;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialMatchReceiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialMatchRatio",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_expireAfter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_mintedAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "FLASH_TOKEN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "calculateMaxStakePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getFPY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintedAmount",
        type: "uint256",
      },
    ],
    name: "getMatchedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
    ],
    name: "getMintAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getPercentageStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "_lockedFunction",
        type: "uint8",
      },
    ],
    name: "lockFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "matchRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "matchReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMatchRatio",
        type: "uint256",
      },
    ],
    name: "setMatchRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMatchReceiver",
        type: "address",
      },
    ],
    name: "setMatchReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "stakeWithPermit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expireAfter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "",
        type: "uint8",
      },
    ],
    name: "timelock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "_lockedFunction",
        type: "uint8",
      },
    ],
    name: "unlockFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "unstakeEarly",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001a0838038062001a088339818101604052604081101561003557600080fd5b50805160209091015161004781610057565b6100508261009e565b50506100c0565b6107d08111156100995760405162461bcd60e51b8152600401808060200182810382526023815260200180620019e56023913960400191505060405180910390fd5b600055565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b61191580620000d06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638fee6407116100ad578063bf499f6811610071578063bf499f68146103bf578063c17bae2a1461045f578063cc704d541461047f578063d08c97021461049c578063e345a380146104a45761012c565b80638fee640714610256578063a066983d146102b2578063aa53099d1461035c578063b3e1f0501461037c578063b4fa3b981461039f5761012c565b80635b49129e116100f45780635b49129e146101ef57806368220664146101f757806371ed5d1a1461021457806376f5cf28146102315780637aadef8b1461024e5761012c565b80631051f696146101315780631f75caac1461016057806323c6e14c1461017d57806327212b5b146101a157806327e235e3146101c9575b600080fd5b61014e6004803603602081101561014757600080fd5b50356104c1565b60408051918252519081900360200190f35b61014e6004803603602081101561017657600080fd5b50356104ea565b61018561050e565b604080516001600160a01b039092168252519081900360200190f35b6101c7600480360360208110156101b757600080fd5b50356001600160a01b0316610526565b005b61014e600480360360208110156101df57600080fd5b50356001600160a01b0316610640565b61014e610652565b61014e6004803603602081101561020d57600080fd5b5035610658565b61014e6004803603602081101561022a57600080fd5b5035610789565b6101c76004803603602081101561024757600080fd5b50356109bb565b61014e610ab6565b6102736004803603602081101561026c57600080fd5b5035610abd565b6040805196875260208701959095528585019390935260608501919091526001600160a01b0390811660808501521660a0830152519081900360c00190f35b61033e600480360360808110156102c857600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156102ff57600080fd5b82018360208201111561031157600080fd5b8035906020019184600183028401116401000000008311171561033357600080fd5b509092509050610b00565b60408051938452602084019290925282820152519081900360600190f35b6101c76004803603602081101561037257600080fd5b503560ff16610b24565b61014e6004803603604081101561039257600080fd5b5080359060200135610ba2565b6101c7600480360360208110156103b557600080fd5b503560ff16610bcf565b61033e600480360360e08110156103d557600080fd5b6001600160a01b038235169160208101359160408201359160ff6060820135169160808201359160a08101359181019060e0810160c082013564010000000081111561042057600080fd5b82018360208201111561043257600080fd5b8035906020019184600183028401116401000000008311171561045457600080fd5b509092509050610c2b565b61014e6004803603602081101561047557600080fd5b503560ff16610cec565b61014e6004803603602081101561049557600080fd5b5035610cfe565b610185610d20565b61014e600480360360208110156104ba57600080fd5b5035610d2f565b60006104e46127106104de6000548561101590919063ffffffff16565b9061107a565b92915050565b60006104e46104f883610cfe565b6104de6706f05b59d3b200006301e13380611015565b73b4467e8d621105312a914f1d42f10770c0ffe3c881565b6001546001600160a01b0316331461056f5760405162461bcd60e51b81526004018080602001828103825260228152602001806118be6022913960400191505060405180910390fd5b6001600081905260036020527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c54158015906105d4575042600360008360018111156105b757fe5b60018111156105c257fe5b81526020019081526020016000205411155b61060f5760405162461bcd60e51b81526004018080602001828103825260238152602001806118736023913960400191505060405180910390fd5b610618826110e4565b600060038160015b600181111561062b57fe5b81526020810191909152604001600020555050565b60046020526000908152604090205481565b60005481565b6000806106f28373b4467e8d621105312a914f1d42f10770c0ffe3c86001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156106c057600080fd5b505afa1580156106d4573d6000803e3d6000fd5b505050506040513d60208110156106ea57600080fd5b505190611106565b905061078273b4467e8d621105312a914f1d42f10770c0ffe3c86001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561074457600080fd5b505afa158015610758573d6000803e3d6000fd5b505050506040513d602081101561076e57600080fd5b50516104de83670de0b6b3a7640000611015565b9392505050565b6000610793611807565b50600082815260026020818152604092839020835160c08101855281548152600182015492810192909252918201549281018390526003820154606082015260048201546001600160a01b03908116608083015260059092015490911660a08201529042101561084a576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f6c3a3a205354414b455f4e4f545f4558504952454400604482015290519081900360640190fd5b805160808201516001600160a01b031660009081526004602052604090205461087291611154565b6080820180516001600160a01b0390811660009081526004602081815260408084209690965586518984526002808352878520858155600181018690559081018590556003810185905580840180546001600160a01b03199081169091556005909101805490911690559451865163a9059cbb60e01b815294169184019190915260248301849052935192955073b4467e8d621105312a914f1d42f10770c0ffe3c89363a9059cbb93604480850194929391928390030190829087803b15801561093b57600080fd5b505af115801561094f573d6000803e3d6000fd5b505050506040513d602081101561096557600080fd5b50506080810151815160408051868152602081019290925280516001600160a01b03909316927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da9281900390910190a250919050565b6001546001600160a01b03163314610a045760405162461bcd60e51b81526004018080602001828103825260228152602001806118be6022913960400191505060405180910390fd5b600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff5415801590610a6757504260036000836001811115610a4a57fe5b6001811115610a5557fe5b81526020019081526020016000205411155b610aa25760405162461bcd60e51b81526004018080602001828103825260238152602001806118736023913960400191505060405180910390fd5b610aab826111a3565b600060038180610620565b6203f48081565b6002602081905260009182526040909120805460018201549282015460038301546004840154600590940154929493919290916001600160a01b03908116911686565b6000806000610b138888338989896111e9565b925092509250955095509592505050565b6001546001600160a01b03163314610b6d5760405162461bcd60e51b81526004018080602001828103825260228152602001806118be6022913960400191505060405180910390fd5b6203f480420160036000836001811115610b8357fe5b6001811115610b8e57fe5b815260208101919091526040016000205550565b60006107826a1a1601fc4ea7109e0000006104de610bbf86610cfe565b610bc98787611015565b90611015565b6001546001600160a01b03163314610c185760405162461bcd60e51b81526004018080602001828103825260228152602001806118be6022913960400191505060405180910390fd5b60001960036000836001811115610b8357fe5b6040805163d505accf60e01b8152336004820181905230602483015260001960448301526064820189905260ff8816608483015260a4820187905260c4820186905291516000928392839273b4467e8d621105312a914f1d42f10770c0ffe3c89163d505accf9160e4808301928792919082900301818387803b158015610cb157600080fd5b505af1158015610cc5573d6000803e3d6000fd5b50505050610cd78b8b838f8a8a6111e9565b93509350935050985098509895505050505050565b60036020526000908152604090205481565b60006104e460026104de610d1185610658565b670de0b6b3a764000090611154565b6001546001600160a01b031681565b6000610d39611807565b50600082815260026020818152604092839020835160c0810185528154815260018201549281019290925291820154928101929092526003810154606083015260048101546001600160a01b03908116608084018190526005909201541660a083015233908114610df1576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f5354414b45520000604482015290519081900360640190fd5b6040820151600090610e039042611154565b90506000610e1a84600001518386602001516117e9565b8451909150811115610e2857fe5b83516001600160a01b038416600090815260046020526040902054610e4c91611154565b6001600160a01b0384166000908152600460205260409020558351610e719082611154565b60008781526002602081815260408084208481556001810185905592830184905560038301849055600480840180546001600160a01b0319908116909155600590940180549094169093558051630852cd8d60e31b81529283018690525193985073b4467e8d621105312a914f1d42f10770c0ffe3c8936342966c68936024808501948390030190829087803b158015610f0a57600080fd5b505af1158015610f1e573d6000803e3d6000fd5b505050506040513d6020811015610f3457600080fd5b50506040805163a9059cbb60e01b81526001600160a01b038516600482015260248101879052905173b4467e8d621105312a914f1d42f10770c0ffe3c89163a9059cbb9160448083019260209291908290030181600087803b158015610f9957600080fd5b505af1158015610fad573d6000803e3d6000fd5b505050506040513d6020811015610fc357600080fd5b5050835160408051888152602081019290925280516001600160a01b038616927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da92908290030190a250505050919050565b600082611024575060006104e4565b8282028284828161103157fe5b0414610782576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204d554c5f4f564552464c4f5760681b604482015290519081900360640190fd5b60008082116110d0576040805162461bcd60e51b815260206004820152601760248201527f4d4154483a3a204449564953494f4e5f42595f5a45524f000000000000000000604482015290519081900360640190fd5b60008284816110db57fe5b04949350505050565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b808201828110156104e4576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204144445f4f564552464c4f5760681b604482015290519081900360640190fd5b808203828111156104e4576040805162461bcd60e51b81526020600482015260146024820152734d4154483a3a205355425f554e444552464c4f5760601b604482015290519081900360640190fd5b6107d08111156111e45760405162461bcd60e51b81526004018080602001828103825260238152602001806118506023913960400191505060405180910390fd5b600055565b6000806000808911611242576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f414d4f554e540000604482015290519081900360640190fd5b6001600160a01b0386163014156112a0576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f4144445245535300604482015290519081900360640190fd5b6112a9896104ea565b8811156112e75760405162461bcd60e51b81526004018080602001828103825260288152602001806118966028913960400191505060405180910390fd5b604080516323b872dd60e01b81526001600160a01b0389166004820152306024820152604481018b9052905173b4467e8d621105312a914f1d42f10770c0ffe3c8916323b872dd9160648083019260209291908290030181600087803b15801561135057600080fd5b505af1158015611364573d6000803e3d6000fd5b505050506040513d602081101561137a57600080fd5b5060009050611389428a611106565b6001600160a01b0389166000908152600460205260409020549091506113af908b611106565b600460008a6001600160a01b03166001600160a01b03168152602001908152602001600020819055508989888a4260405160200180868152602001858152602001846001600160a01b031660601b8152601401836001600160a01b031660601b81526014018281526020019550505050505060405160208183030381529060405280519060200120915060006001600160a01b03166002600084815260200190815260200160002060040160009054906101000a90046001600160a01b03166001600160a01b0316146114c9576040805162461bcd60e51b815260206004820152601c60248201527f466c61736850726f746f636f6c3a3a205354414b455f45584953545300000000604482015290519081900360640190fd5b6114d38a8a610ba2565b93506114de846104c1565b925073b4467e8d621105312a914f1d42f10770c0ffe3c86001600160a01b03166340c10f1988866040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561154b57600080fd5b505af115801561155f573d6000803e3d6000fd5b505050506040513d602081101561157557600080fd5b5050600154604080516340c10f1960e01b81526001600160a01b039092166004830152602482018590525173b4467e8d621105312a914f1d42f10770c0ffe3c8916340c10f199160448083019260209291908290030181600087803b1580156115dd57600080fd5b505af11580156115f1573d6000803e3d6000fd5b505050506040513d602081101561160757600080fd5b50506040805160c0810182528b815260208181018c8152828401858152606084018981526001600160a01b03808f16608087019081528e821660a0880181815260008c8152600298899052999099209751885594516001880155925194860194909455516003850155516004840180549184166001600160a01b031992831617905593516005909301805493909216929093169190911790556116a990611801565b1561177e57866001600160a01b0316632cbff446838c84888d8c8c6040518863ffffffff1660e01b815260040180888152602001878152602001868152602001858152602001846001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505098505050505050505050602060405180830381600087803b15801561175157600080fd5b505af1158015611765573d6000803e3d6000fd5b505050506040513d602081101561177b57600080fd5b50505b60408051838152602081018c90528082018b9052606081018390526080810186905290516001600160a01b03808a1692908b16917f8872a0bfe035dd55f2341f67aa0f9a8196bb3f97e132b6d3cb2f53f91aaa93f99181900360a00190a35096509650969350505050565b60006117f9826104de8686611015565b949350505050565b3b151590565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152509056fe466c61736850726f746f636f6c3a3a20494e56414c49445f4d415443485f524154494f466c61736850726f746f636f6c3a3a2046554e4354494f4e5f54494d454c4f434b4544466c61736850726f746f636f6c3a3a204d41585f5354414b455f504552494f445f45584345454453466c61736850726f746f636f6c3a3a204e4f545f4d415443485f5245434549564552a2646970667358221220cc05860bb383707f048c9fb9638deeceab9a26769e2a13d3563f6db1e230e01564736f6c634300060c0033466c61736850726f746f636f6c3a3a20494e56414c49445f4d415443485f524154494f";
