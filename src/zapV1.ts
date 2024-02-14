import { ChainId, MINI_APE_ADDRESS, ZapType } from './constants'
import invariant from 'tiny-invariant'
import { validateAndParseAddress } from './utils'
import { Currency, CurrencyAmount, ETHER, Pair, Percent, Token, TokenAmount, WETH } from './entities'
import JSBI from 'jsbi'

/**
 * Options for producing the arguments to send call to zap.
 */
export interface ZapOptions {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   */
  allowedSlippage: Percent
  /**
   * How long the zap is valid until it expires, in seconds.
   * This will be used to produce a `deadline` parameter which is computed from when the zap call parameters
   * are generated.
   */
  ttl: number
  /**
   * The account that should receive the output of the zap.
   */
  recipient: string

  zapType: ZapType

  // When zapping into a contract we need to pass it
  stakingContractAddress?: string

  // PID for when staking into chef contracts
  stakingPid?: string

  // This is the max price for a bill to be zapped
  maxPrice?: string
}

export interface ZapOptionsDeadline extends Omit<ZapOptions, 'ttl'> {
  /**
   * When the transaction expires.
   * This is an atlernate to specifying the ttl, for when you do not want to use local time.
   */
  deadline: number
}

/**
 * The parameters to use in the call to the Uniswap V2 Router to execute a trade.
 */
export interface ZapParameters {
  /**
   * The method to call on the Uniswap V2 Router.
   */
  methodName: string
  /**
   * The arguments to pass to the method, all hex encoded.
   */
  args: (string | string[] | number[])[]
  /**
   * The amount of wei to send in hex.
   */
  value: string
}

type CurrencyOut = {
  outputCurrency: Token
  path: Token[]
  outputAmount: CurrencyAmount
  minOutputAmount: string
}

type MergedZap = {
  currencyIn: {
    currency: Currency
    inputAmount: string | JSBI
  }
  currencyOut1: CurrencyOut
  currencyOut2: CurrencyOut
  pairOut: {
    pair: Pair
    minInAmount: { token1: string; token2: string }
    totalPairSupply: TokenAmount
    liquidityMinted: TokenAmount
  }
  chainId: ChainId
}

const ZERO_HEX = '0x0'

export abstract class ZapV1 {
  /**
   * Cannot be constructed.
   */
  private constructor() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param zap get zap values
   * @param options options for the call parameters
   */
  public static zapCallParameters(zap: MergedZap, options: ZapOptions | ZapOptionsDeadline): ZapParameters {
    invariant(zap, 'null Zap')

    const { chainId, currencyIn, currencyOut1, currencyOut2, pairOut } = zap
    const { zapType, maxPrice } = options

    invariant(chainId !== undefined, 'CHAIN_ID')

    const etherIn = currencyIn.currency === ETHER

    const path1 = currencyOut1.path.map(token => token.address)
    const path2 = currencyOut2.path.map(token => token.address)
    const currencyInToken: Token = (etherIn ? (WETH[chainId]) : (currencyIn?.currency)) as Token
    const to: string = validateAndParseAddress(options.recipient)
    const stakingContractAddress = options?.stakingContractAddress
    const stakingPid = options?.stakingPid

    const deadline =
      'ttl' in options
        ? `0x${(Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)}`
        : `0x${options.deadline.toString(16)}`

    let methodName: string
    let args: (string | string[] | number[])[]
    let value: string
    switch (zapType) {
      case ZapType.ZAP:
        if (etherIn) {
          methodName = 'zapNative'
          args = [
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            to,
            deadline
          ]
          value = currencyIn.inputAmount.toString()
        } else {
          methodName = 'zap'
          args = [
            currencyInToken.address,
            currencyIn.inputAmount.toString(),
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            to,
            deadline
          ]
          value = ZERO_HEX
        }
        break
      case ZapType.ZAP_SINGLE_ASSET_POOL:
        invariant(stakingContractAddress, 'Missing Pool Address')
        if (etherIn) {
          methodName = 'zapSingleAssetPoolNative'
          args = [path1, currencyOut1.minOutputAmount, deadline, stakingContractAddress]
          value = currencyIn.inputAmount.toString()
        } else {
          methodName = 'zapSingleAssetPool'
          args = [
            currencyInToken.address,
            currencyIn.inputAmount.toString(),
            path1,
            currencyOut1.minOutputAmount,
            deadline,
            stakingContractAddress
          ]
          value = ZERO_HEX
        }
        break
      case ZapType.ZAP_LP_POOL:
        invariant(stakingContractAddress, 'Missing Pool Address')
        if (etherIn) {
          methodName = 'zapLPPoolNative'
          args = [
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            stakingContractAddress
          ]
          value = currencyIn.inputAmount.toString()
        } else {
          methodName = 'zapLPPool'
          args = [
            currencyInToken.address,
            currencyIn.inputAmount.toString(),
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            stakingContractAddress
          ]
          value = ZERO_HEX
        }
        break
      case ZapType.ZAP_T_BILL:
        invariant(stakingContractAddress, 'Missing Bill Address')
        if (etherIn) {
          methodName = 'zapTBillNative'
          args = [
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            stakingContractAddress,
            maxPrice || '0'
          ]
          value = currencyIn.inputAmount.toString()
        } else {
          methodName = 'zapTBill'
          args = [
            currencyInToken.address,
            currencyIn.inputAmount.toString(),
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            stakingContractAddress,
            maxPrice || '0'
          ]
          value = ZERO_HEX
        }
        break
      case ZapType.ZAP_MINI_APE:
        invariant(stakingPid, 'Missing contract PID')
        if (etherIn) {
          methodName = 'zapMiniApeV2Native'
          args = [
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            MINI_APE_ADDRESS[ChainId.MATIC] || '',
            stakingPid
          ]
          value = currencyIn.inputAmount.toString()
        } else {
          methodName = 'zapMiniApeV2'
          args = [
            currencyInToken.address,
            currencyIn.inputAmount.toString(),
            [currencyOut1.outputCurrency.address, currencyOut2.outputCurrency.address],
            path1,
            path2,
            [currencyOut1.minOutputAmount, currencyOut2.minOutputAmount],
            [pairOut.minInAmount.token1, pairOut.minInAmount.token2],
            deadline,
            MINI_APE_ADDRESS[ChainId.MATIC] || '',
            stakingPid
          ]
          value = ZERO_HEX
        }
        break
      default:
        methodName = ''
        args = []
        value = '0'
    }
    return { methodName, args, value }
  }
}
