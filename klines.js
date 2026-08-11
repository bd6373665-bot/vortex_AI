import Binance from 'binance-api-node'
export default async function handler(req,res){
  const client = Binance({
    apiKey: process.env.BINANCE_API_KEY,
    apiSecret: process.env.BINANCE_API_SECRET
  })
  const {symbol='BTCUSDT', interval='1h', limit=200} = req.query
  try {
    const candles = await client.candles({symbol, interval, limit})
    res.status(200).json(candles)
  } catch(e){ res.status(500).json({error:e.message}) }
}