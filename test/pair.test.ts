import { ChainId, Token, Pair, TokenAmount, WETH, Price, SmartRouter } from '../src'

describe('Pair', () => {
  const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18, 'USDC', 'USD Coin')
  const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'DAI Stablecoin')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () => new Pair(new TokenAmount(USDC, '100'), new TokenAmount(WETH[ChainId.MATIC], '100'), SmartRouter.UNISWAP)
      ).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(Pair.getAddress(USDC, DAI, SmartRouter.UNISWAP)).toEqual('0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).token0).toEqual(DAI)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100'), SmartRouter.APE).token0).toEqual(DAI)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).token1).toEqual(USDC)
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100'), SmartRouter.APE).token1).toEqual(USDC)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101'), SmartRouter.APE).reserve0).toEqual(
        new TokenAmount(DAI, '101')
      )
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100'), SmartRouter.APE).reserve0).toEqual(
        new TokenAmount(DAI, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101'), SmartRouter.APE).reserve1).toEqual(
        new TokenAmount(USDC, '100')
      )
      expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100'), SmartRouter.APE).reserve1).toEqual(
        new TokenAmount(USDC, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'), SmartRouter.APE).token0Price).toEqual(
        new Price(DAI, USDC, '100', '101')
      )
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101'), SmartRouter.APE).token0Price).toEqual(
        new Price(DAI, USDC, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'), SmartRouter.APE).token1Price).toEqual(
        new Price(USDC, DAI, '101', '100')
      )
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101'), SmartRouter.APE).token1Price).toEqual(
        new Price(USDC, DAI, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'), SmartRouter.APE)
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(DAI)).toEqual(pair.token0Price)
      expect(pair.priceOf(USDC)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WETH[ChainId.MAINNET])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(
        new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101'), SmartRouter.APE).reserveOf(USDC)
      ).toEqual(new TokenAmount(USDC, '100'))
      expect(
        new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100'), SmartRouter.APE).reserveOf(USDC)
      ).toEqual(new TokenAmount(USDC, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100'), SmartRouter.APE).reserveOf(
          WETH[ChainId.MAINNET]
        )
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).chainId).toEqual(
        ChainId.MAINNET
      )
      expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100'), SmartRouter.APE).chainId).toEqual(
        ChainId.MAINNET
      )
    })
  })
  describe('#involvesToken', () => {
    expect(
      new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).involvesToken(USDC)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).involvesToken(DAI)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100'), SmartRouter.APE).involvesToken(
        WETH[ChainId.MAINNET]
      )
    ).toEqual(false)
  })
})
