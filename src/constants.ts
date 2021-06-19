import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = { 
  [ChainId.MAINNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.ROPSTEN]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.RINKEBY]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.GÖRLI]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.KOVAN]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.FANTOM]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
  [ChainId.MATIC_TESTNET]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
  [ChainId.XDAI]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.BSC]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.BSC_TESTNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.AVALANCHE]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.FUJI]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.HECO]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.HECO_TESTNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.HARMONY]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.HARMONY_TESTNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.OKEX]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
  [ChainId.OKEX_TESTNET]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b'
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
  [ChainId.MATIC_TESTNET]: '0xe145a77c21437e3FD32ce2731833114F0B53405b',
  [ChainId.XDAI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
  [ChainId.BSC_TESTNET]: '0x152349604d49c2af10adee94b918b051104a143e',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5',
  [ChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKEX]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKEX_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ROPSTEN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.GÖRLI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.KOVAN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
  [ChainId.MATIC_TESTNET]: '0x8fCf4B197A9Df7ab4ed511932cA6c8E1a8fe2F1d',
  [ChainId.XDAI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC]: '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7',
  [ChainId.BSC_TESTNET]: '0x3380ae82e39e42ca34ebed69af67faa0683bb5c1',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef',
  [ChainId.AVALANCHE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FUJI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HARMONY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HARMONY_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKEX]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKEX_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
}

export const SUSHI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.ROPSTEN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.RINKEBY]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.GÖRLI]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KOVAN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.RINKEBY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GÖRLI]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.KOVAN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GÖRLI]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KOVAN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
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
