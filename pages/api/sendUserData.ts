// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import pinataSDK from '@pinata/sdk'
const pinata = pinataSDK(
  '7aec58df8140ec00c355',
  'd458ce746f81f57d6b0e35442a39b427da61af47a0f1c3f753c78db650ff0e04'
)

async function uploadJsonToDecentralizedStorage(data) {
  // function that uploads buffer to decentralized storage
  // and returns url of uploaded file from a gateway.
  // const readableStreamForFile = fs.createReadStream(url);
  return new Promise((resolve, reject) => {
    pinata
      .pinJSONToIPFS(data)
      .then((result) => {
        //handle results here
        // console.log(result);
        resolve(`https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`)
      })
      .catch((err) => {
        //handle error here
        // console.log(err);
        reject(err)
      })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = await uploadJsonToDecentralizedStorage(req.body)

    res.status(200).json({ url })
  } catch (err) {
    res.status(404).json({ err })
  }
}

export default handler
