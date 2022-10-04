import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum ZapType {
  ZAP,
  ZAP_LP_MIGRATOR,
  ZAP_LP_POOL,
  ZAP_SINGLE_ASSET_POOL,
  ZAP_T_BILL,
  ZAP_MINI_APE
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export enum ChainId {
  MAINNET = 1,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  BSC = 56,
  BSC_TESTNET = 97
}

export enum SmartRouter {
  APE = 'APE',
  PANCAKE = 'PANCAKE',
  BISWAP = 'BISWAP',
  QUICKSWAP = 'QUICKSWAP',
  UNISWAP = 'UNISWAP',
  SUSHISWAP = 'SUSHISWAP'
}

// Each constant will need each chain and SmartRouter

// Set the initial hash. Can find from factory

export const SMART_INIT_CODE_HASH: Record<ChainId, Record<SmartRouter, string>> = {
  [ChainId.MAINNET]: {
    [SmartRouter.APE]: '0xe2200989b6f9506f3beca7e9c844741b3ad1a88ad978b6b0973e96d3ca4707aa',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [SmartRouter.SUSHISWAP]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
  },
  [ChainId.BSC]: {
    [SmartRouter.APE]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    [SmartRouter.PANCAKE]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    [SmartRouter.BISWAP]: '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.BSC_TESTNET]: {
    [SmartRouter.APE]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC]: {
    [SmartRouter.APE]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC_TESTNET]: {
    [SmartRouter.APE]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  }
}

// Set the factory for each chain

export const SMART_FACTORY_ADDRESS: Record<ChainId, Record<SmartRouter, string>> = {
  [ChainId.MAINNET]: {
    [SmartRouter.APE]: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [SmartRouter.SUSHISWAP]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
  },
  [ChainId.BSC]: {
    [SmartRouter.APE]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    [SmartRouter.PANCAKE]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    [SmartRouter.BISWAP]: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.BSC_TESTNET]: {
    [SmartRouter.APE]: '0x152349604d49c2af10adee94b918b051104a143e',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC]: {
    [SmartRouter.APE]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC_TESTNET]: {
    [SmartRouter.APE]: '0xe145a77c21437e3FD32ce2731833114F0B53405b',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  }
}

// Set the router for each chain

export const SMART_ROUTER_ADDRESS: Record<ChainId, Record<SmartRouter, string>> = {
  [ChainId.MAINNET]: {
    [SmartRouter.APE]: '0x5f509a3C3F16dF2Fba7bF84dEE1eFbce6BB85587',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [SmartRouter.SUSHISWAP]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
  },
  [ChainId.BSC]: {
    [SmartRouter.APE]: '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7',
    [SmartRouter.PANCAKE]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    [SmartRouter.BISWAP]: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.BSC_TESTNET]: {
    [SmartRouter.APE]: '0x3380ae82e39e42ca34ebed69af67faa0683bb5c1',
    [SmartRouter.PANCAKE]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC]: {
    [SmartRouter.APE]: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  },
  [ChainId.MATIC_TESTNET]: {
    [SmartRouter.APE]: '0x8fCf4B197A9Df7ab4ed511932cA6c8E1a8fe2F1d',
    [SmartRouter.PANCAKE]: '',
    [SmartRouter.BISWAP]: '',
    [SmartRouter.QUICKSWAP]: '',
    [SmartRouter.UNISWAP]: '',
    [SmartRouter.SUSHISWAP]: ''
  }
}

// Set the bonus router for each chain

export const BONUS_ROUTER_ADDRESS: Record<ChainId, string> = {
  [ChainId.MAINNET]: '0xb4aD8df313109caaF8Fdcde9094e9d1DE41252bc',
  [ChainId.BSC]: '0x5471F99bCB8F682f4Fd2b463Fd3609DadD56A929',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.MATIC]: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
  [ChainId.MATIC_TESTNET]: ''
}

// Set the zap address for each chain

export const ZAP_ADDRESS: Record<ChainId, string> = {
  [ChainId.MAINNET]: '',
  [ChainId.BSC]: '0x7E060D0e0563fbD4CD2b3B845a992Eab31e47f8b',
  [ChainId.BSC_TESTNET]: '0xEe0e3270d2C62AC598E435212a5f87A431e4dDcF',
  [ChainId.MATIC]: '0x7c9eCf17694cB2f91cC24ca5b2fC1ED0cd48EDCb',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.TLOS]: '0x10614e4395AAc006ca0Ef4970d1412e8e921d911'
}

// TODO: Cleanup legacy code and swap constants on the FE

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xe2200989b6f9506f3beca7e9c844741b3ad1a88ad978b6b0973e96d3ca4707aa',
  [ChainId.MATIC]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
  [ChainId.MATIC_TESTNET]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
  [ChainId.BSC]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.BSC_TESTNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b'
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
  [ChainId.MATIC]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
  [ChainId.MATIC_TESTNET]: '0xe145a77c21437e3FD32ce2731833114F0B53405b',
  [ChainId.BSC]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
  [ChainId.BSC_TESTNET]: '0x152349604d49c2af10adee94b918b051104a143e'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5f509a3C3F16dF2Fba7bF84dEE1eFbce6BB85587',
  [ChainId.MATIC]: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
  [ChainId.MATIC_TESTNET]: '0x8fCf4B197A9Df7ab4ed511932cA6c8E1a8fe2F1d',
  [ChainId.BSC]: '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7',
  [ChainId.BSC_TESTNET]: '0x3380ae82e39e42ca34ebed69af67faa0683bb5c1'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
