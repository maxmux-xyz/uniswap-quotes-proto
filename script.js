const { abi: Quoter2Abi } = require ('@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json')
const { ethers } = require ('ethers')

const WETH_ADDRESS = '0x4200000000000000000000000000000000000006'
const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
const QUOTER2_ADDRESS = '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a'

ALCHEMY_URL = '<Your alchemy url: Base mainnet>'

const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL)
const tokenIn = WETH_ADDRESS
const tokenOut = USDC_ADDRESS
const fee = '500'
const amount = '3536000'
const sqrtPriceLimitX96 = '0'

const quoter2 = new ethers.Contract(
  QUOTER2_ADDRESS,
  Quoter2Abi,
  provider
)

const main = async () => {
  const params = {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    fee: fee,
    amount: amount,
    sqrtPriceLimitX96: sqrtPriceLimitX96
  }

  const output = await quoter2.callStatic.quoteExactOutputSingle(
    params
  )
  console.log("Amount of ETH necessary for next step:")
  console.log('output: ', output.amountIn.toString())
}
main()