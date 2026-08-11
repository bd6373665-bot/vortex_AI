export default async function handler(req,res){
  const {symbol, side, quantity, type='MARKET'} = req.body
  // Verify user auth + rate limit here
  const order = await client.order({symbol, side, quantity, type})
  res.json(order)
}