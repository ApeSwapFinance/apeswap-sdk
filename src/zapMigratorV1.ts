import { ChainId, SMART_ROUTER_ADDRESS } from './constants'
import invariant from 'tiny-invariant'
import { Pair, Percent } from './entities'

/**
 * Options for producing the arguments to send call to the router.
 */
export interface ZapMigratorOptions {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   */
  allowedSlippage: Percent
  /**
   * How long the swap is valid until it expires, in seconds.
   * This will be used to produce a `deadline` parameter which is computed from when the swap call parameters
   * are generated.
   */
  ttl: number
  /**
   * The account that should receive the output of the swap.
   */
  recipient: string
}

export interface ZapMigratorOptionsDeadline extends Omit<ZapMigratorOptions, 'ttl'> {
  /**
   * When the transaction expires.
   * This is an atlernate to specifying the ttl, for when you do not want to use local time.
   */
  deadline: number
}

/**
 * The parameters to use in the call to the Uniswap V2 Router to execute a trade.
 */
export interface ZapMigratorParameters {
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

type MigratorZap = {
  chainId: ChainId
  zapLp: Pair
  amount: string
  amountAMinRemove: string
  amountBMinRemove: string
  amountAMinAdd: string
  amountBMinAdd: string
}

const ZERO_HEX = '0x0'

export abstract class ZapMigratorV1 {
  /**
   * Cannot be constructed.
   */
  private constructor() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param zap get zap values
   * @param options options for the call parameters
   */
  public static zapCallParameters(
    zap: MigratorZap,
    options: ZapMigratorOptions | ZapMigratorOptionsDeadline
  ): ZapMigratorParameters {
    invariant(zap, 'null Zap')

    const { zapLp, amount, amountAMinRemove, amountBMinRemove, amountAMinAdd, amountBMinAdd, chainId } = zap
    const routerAddress = SMART_ROUTER_ADDRESS[chainId][zapLp.router]

    const deadline =
      'ttl' in options
        ? `0x${(Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)}`
        : `0x${options.deadline.toString(16)}`

    return {
      methodName: 'zapLPMigrator',
      args: [
        routerAddress,
        zapLp.liquidityToken.address,
        amount,
        amountAMinRemove,
        amountBMinRemove,
        amountAMinAdd,
        amountBMinAdd,
        deadline
      ],
      value: ZERO_HEX
    }
  }
}
