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
        internalType: "uint256",
        name: "_deadline",
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
  "0x608060405234801561001057600080fd5b5060405162001a0938038062001a098339818101604052604081101561003557600080fd5b50805160209091015161004781610057565b6100508261009e565b50506100c0565b6107d08111156100995760405162461bcd60e51b8152600401808060200182810382526023815260200180620019e66023913960400191505060405180910390fd5b600055565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b61191680620000d06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80637aadef8b116100ad578063b4fa3b9811610071578063b4fa3b9814610448578063c17bae2a14610468578063cc704d5414610488578063d08c9702146104a5578063e345a380146104ad5761012c565b80637aadef8b146103155780638fee64071461031d578063a066983d14610379578063aa53099d14610405578063b3e1f050146104255761012c565b806332a3fcb8116100f457806332a3fcb8146101ef5780635b49129e146102b657806368220664146102be57806371ed5d1a146102db57806376f5cf28146102f85761012c565b80631051f696146101315780631f75caac1461016057806323c6e14c1461017d57806327212b5b146101a157806327e235e3146101c9575b600080fd5b61014e6004803603602081101561014757600080fd5b50356104ca565b60408051918252519081900360200190f35b61014e6004803603602081101561017657600080fd5b50356104f3565b610185610517565b604080516001600160a01b039092168252519081900360200190f35b6101c7600480360360208110156101b757600080fd5b50356001600160a01b031661052f565b005b61014e600480360360208110156101df57600080fd5b50356001600160a01b0316610649565b610298600480360361010081101561020657600080fd5b6001600160a01b038235169160208101359160408201359160608101359160ff6080830135169160a08101359160c08201359190810190610100810160e082013564010000000081111561025957600080fd5b82018360208201111561026b57600080fd5b8035906020019184600183028401116401000000008311171561028d57600080fd5b50909250905061065b565b60408051938452602084019290925282820152519081900360600190f35b61014e61071c565b61014e600480360360208110156102d457600080fd5b5035610722565b61014e600480360360208110156102f157600080fd5b5035610853565b6101c76004803603602081101561030e57600080fd5b5035610a85565b61014e610b80565b61033a6004803603602081101561033357600080fd5b5035610b87565b6040805196875260208701959095528585019390935260608501919091526001600160a01b0390811660808501521660a0830152519081900360c00190f35b6102986004803603608081101561038f57600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156103c657600080fd5b8201836020820111156103d857600080fd5b803590602001918460018302840111640100000000831117156103fa57600080fd5b509092509050610bca565b6101c76004803603602081101561041b57600080fd5b503560ff16610bed565b61014e6004803603604081101561043b57600080fd5b5080359060200135610c6b565b6101c76004803603602081101561045e57600080fd5b503560ff16610c98565b61014e6004803603602081101561047e57600080fd5b503560ff16610cf4565b61014e6004803603602081101561049e57600080fd5b5035610d06565b610185610d28565b61014e600480360360208110156104c357600080fd5b5035610d37565b60006104ed6127106104e76000548561101d90919063ffffffff16565b90611082565b92915050565b60006104ed61050183610d06565b6104e76706f05b59d3b200006301e1338061101d565b73a193e42526f1fea8c99af609dceabf30c1c29faa81565b6001546001600160a01b031633146105785760405162461bcd60e51b81526004018080602001828103825260228152602001806118bf6022913960400191505060405180910390fd5b6001600081905260036020527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c54158015906105dd575042600360008360018111156105c057fe5b60018111156105cb57fe5b81526020019081526020016000205411155b6106185760405162461bcd60e51b81526004018080602001828103825260238152602001806118746023913960400191505060405180910390fd5b610621826110ec565b600060038160015b600181111561063457fe5b81526020810191909152604001600020555050565b60046020526000908152604090205481565b6040805163d505accf60e01b8152336004820181905230602483015260001960448301526064820189905260ff8816608483015260a4820187905260c4820186905291516000928392839273a193e42526f1fea8c99af609dceabf30c1c29faa9163d505accf9160e4808301928792919082900301818387803b1580156106e157600080fd5b505af11580156106f5573d6000803e3d6000fd5b505050506107068c8c8f898961110e565b9350935093505099509950999650505050505050565b60005481565b6000806107bc8373a193e42526f1fea8c99af609dceabf30c1c29faa6001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561078a57600080fd5b505afa15801561079e573d6000803e3d6000fd5b505050506040513d60208110156107b457600080fd5b505190611707565b905061084c73a193e42526f1fea8c99af609dceabf30c1c29faa6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561080e57600080fd5b505afa158015610822573d6000803e3d6000fd5b505050506040513d602081101561083857600080fd5b50516104e783670de0b6b3a764000061101d565b9392505050565b600061085d611808565b50600082815260026020818152604092839020835160c08101855281548152600182015492810192909252918201549281018390526003820154606082015260048201546001600160a01b03908116608083015260059092015490911660a082015290421015610914576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f6c3a3a205354414b455f4e4f545f4558504952454400604482015290519081900360640190fd5b805160808201516001600160a01b031660009081526004602052604090205461093c91611755565b6080820180516001600160a01b0390811660009081526004602081815260408084209690965586518984526002808352878520858155600181018690559081018590556003810185905580840180546001600160a01b03199081169091556005909101805490911690559451865163a9059cbb60e01b815294169184019190915260248301849052935192955073a193e42526f1fea8c99af609dceabf30c1c29faa9363a9059cbb93604480850194929391928390030190829087803b158015610a0557600080fd5b505af1158015610a19573d6000803e3d6000fd5b505050506040513d6020811015610a2f57600080fd5b50506080810151815160408051868152602081019290925280516001600160a01b03909316927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da9281900390910190a250919050565b6001546001600160a01b03163314610ace5760405162461bcd60e51b81526004018080602001828103825260228152602001806118bf6022913960400191505060405180910390fd5b600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff5415801590610b3157504260036000836001811115610b1457fe5b6001811115610b1f57fe5b81526020019081526020016000205411155b610b6c5760405162461bcd60e51b81526004018080602001828103825260238152602001806118746023913960400191505060405180910390fd5b610b75826117a4565b600060038180610629565b6203f48081565b6002602081905260009182526040909120805460018201549282015460038301546004840154600590940154929493919290916001600160a01b03908116911686565b6000806000610bdc888888888861110e565b925092509250955095509592505050565b6001546001600160a01b03163314610c365760405162461bcd60e51b81526004018080602001828103825260228152602001806118bf6022913960400191505060405180910390fd5b6203f480420160036000836001811115610c4c57fe5b6001811115610c5757fe5b815260208101919091526040016000205550565b600061084c6a1a1601fc4ea7109e0000006104e7610c8886610d06565b610c92878761101d565b9061101d565b6001546001600160a01b03163314610ce15760405162461bcd60e51b81526004018080602001828103825260228152602001806118bf6022913960400191505060405180910390fd5b60001960036000836001811115610c4c57fe5b60036020526000908152604090205481565b60006104ed60026104e7610d1985610722565b670de0b6b3a764000090611755565b6001546001600160a01b031681565b6000610d41611808565b50600082815260026020818152604092839020835160c0810185528154815260018201549281019290925291820154928101929092526003810154606083015260048101546001600160a01b03908116608084018190526005909201541660a083015233908114610df9576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f5354414b45520000604482015290519081900360640190fd5b6040820151600090610e0b9042611755565b90506000610e2284600001518386602001516117ea565b8451909150811115610e3057fe5b83516001600160a01b038416600090815260046020526040902054610e5491611755565b6001600160a01b0384166000908152600460205260409020558351610e799082611755565b60008781526002602081815260408084208481556001810185905592830184905560038301849055600480840180546001600160a01b0319908116909155600590940180549094169093558051630852cd8d60e31b81529283018690525193985073a193e42526f1fea8c99af609dceabf30c1c29faa936342966c68936024808501948390030190829087803b158015610f1257600080fd5b505af1158015610f26573d6000803e3d6000fd5b505050506040513d6020811015610f3c57600080fd5b50506040805163a9059cbb60e01b81526001600160a01b038516600482015260248101879052905173a193e42526f1fea8c99af609dceabf30c1c29faa9163a9059cbb9160448083019260209291908290030181600087803b158015610fa157600080fd5b505af1158015610fb5573d6000803e3d6000fd5b505050506040513d6020811015610fcb57600080fd5b5050835160408051888152602081019290925280516001600160a01b038616927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da92908290030190a250505050919050565b60008261102c575060006104ed565b8282028284828161103957fe5b041461084c576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204d554c5f4f564552464c4f5760681b604482015290519081900360640190fd5b60008082116110d8576040805162461bcd60e51b815260206004820152601760248201527f4d4154483a3a204449564953494f4e5f42595f5a45524f000000000000000000604482015290519081900360640190fd5b60008284816110e357fe5b04949350505050565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000806000808811611167576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f414d4f554e540000604482015290519081900360640190fd5b6001600160a01b0386163014156111c5576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f4144445245535300604482015290519081900360640190fd5b6111ce886104f3565b87111561120c5760405162461bcd60e51b81526004018080602001828103825260288152602001806118976028913960400191505060405180910390fd5b604080516323b872dd60e01b81523360048201819052306024830152604482018b9052915173a193e42526f1fea8c99af609dceabf30c1c29faa916323b872dd9160648083019260209291908290030181600087803b15801561126e57600080fd5b505af1158015611282573d6000803e3d6000fd5b505050506040513d602081101561129857600080fd5b50600090506112a7428a611707565b6001600160a01b0383166000908152600460205260409020549091506112cd908b611707565b60046000846001600160a01b03166001600160a01b0316815260200190815260200160002081905550898989844260405160200180868152602001858152602001846001600160a01b031660601b8152601401836001600160a01b031660601b81526014018281526020019550505050505060405160208183030381529060405280519060200120925060006001600160a01b03166002600085815260200190815260200160002060040160009054906101000a90046001600160a01b03166001600160a01b0316146113e7576040805162461bcd60e51b815260206004820152601c60248201527f466c61736850726f746f636f6c3a3a205354414b455f45584953545300000000604482015290519081900360640190fd5b6113f18a8a610c6b565b94506113fc856104ca565b935073a193e42526f1fea8c99af609dceabf30c1c29faa6001600160a01b03166340c10f1989876040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561146957600080fd5b505af115801561147d573d6000803e3d6000fd5b505050506040513d602081101561149357600080fd5b5050600154604080516340c10f1960e01b81526001600160a01b039092166004830152602482018690525173a193e42526f1fea8c99af609dceabf30c1c29faa916340c10f199160448083019260209291908290030181600087803b1580156114fb57600080fd5b505af115801561150f573d6000803e3d6000fd5b505050506040513d602081101561152557600080fd5b50506040805160c0810182528b815260208181018c8152828401858152606084018a81526001600160a01b03808916608087019081528f821660a0880181815260008d8152600298899052999099209751885594516001880155925194860194909455516003850155516004840180549184166001600160a01b031992831617905593516005909301805493909216929093169190911790556115c790611802565b1561169c57876001600160a01b0316632cbff446848c8489878d8d6040518863ffffffff1660e01b815260040180888152602001878152602001868152602001858152602001846001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505098505050505050505050602060405180830381600087803b15801561166f57600080fd5b505af1158015611683573d6000803e3d6000fd5b505050506040513d602081101561169957600080fd5b50505b60408051848152602081018c90528082018b9052606081018390526080810187905290516001600160a01b03808b1692908516917f8872a0bfe035dd55f2341f67aa0f9a8196bb3f97e132b6d3cb2f53f91aaa93f99181900360a00190a35050955095509592505050565b808201828110156104ed576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204144445f4f564552464c4f5760681b604482015290519081900360640190fd5b808203828111156104ed576040805162461bcd60e51b81526020600482015260146024820152734d4154483a3a205355425f554e444552464c4f5760601b604482015290519081900360640190fd5b6107d08111156117e55760405162461bcd60e51b81526004018080602001828103825260238152602001806118516023913960400191505060405180910390fd5b600055565b60006117fa826104e7868661101d565b949350505050565b3b151590565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152509056fe466c61736850726f746f636f6c3a3a20494e56414c49445f4d415443485f524154494f466c61736850726f746f636f6c3a3a2046554e4354494f4e5f54494d454c4f434b4544466c61736850726f746f636f6c3a3a204d41585f5354414b455f504552494f445f45584345454453466c61736850726f746f636f6c3a3a204e4f545f4d415443485f5245434549564552a2646970667358221220178059286a3d74b9acbac7a97f8aa0aa7074b3db99d7d885935ba653405726df64736f6c634300060c0033466c61736850726f746f636f6c3a3a20494e56414c49445f4d415443485f524154494f";
