import type { NextApiRequest, NextApiResponse } from 'next'

// import redis from '../../lib/redis'

export default async function getAllFeatures(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const data = (await redis.hvals('shipping')).map((entry) => JSON.parse(entry))

  // res.status(200).json({ data })
  res.status(200).json({ req })
}
