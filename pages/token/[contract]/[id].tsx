import {
  NFTFullPage,
  MediaConfiguration,
  FullComponents,
} from '@zoralabs/nft-components'
import { useRouter } from 'next/router'
import {
  MediaFetchAgent,
  NetworkIDs,
  FetchStaticData,
} from '@zoralabs/nft-hooks'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NETWORK_ID } from './../../../utils/env-vars'
import { PageWrapper } from '../../../styles/components'
import moment from 'moment'
import styled from 'styled-components'

import { CopyToClipboard } from 'react-copy-to-clipboard'

// import {writeFileSync} from 'fs';
import { SiteContainer } from '../../../atoms/SiteContainer'
import Header from '../../../components/Header/index'
import { useState } from 'react'
import { useEffect } from 'react'

const styles = {
  theme: {
    lineSpacing: 24,
    linkColor: 'var(--black)',
  },
}
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 100px;
  border-radius: 50px;
  border: none;
  margin: 10px auto;
  cursor: pointer;
  @media (max-width: 465px) {
    padding: 20px 60px;
  }
`
type PieceProps = {
  name: string
  description: string
  image: string
  initialData: any
  marketEth: any
}
const jsx_runtime_1 = require('react/jsx-runtime')
const react_1 = require('react')
const css_1 = require('@emotion/css')
const useMediaContext_1 = require('@zoralabs/nft-components/dist/context/useMediaContext')
const NFTDataContext_1 = require('@zoralabs/nft-components/dist/context/NFTDataContext')
const CollectionTag = () => {
  const {
    nft: { data },
  } = react_1.useContext(NFTDataContext_1.NFTDataContext)
  const { getStyles } = useMediaContext_1.useMediaContext()
  const getContent = () => {
    return jsx_runtime_1.jsxs(
      'a',
      Object.assign(
        {},
        getStyles('colectionTagWrapper'),
        {
          href: `https://zora.co/collections/0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9`,
          target: '_blank',
          rel: 'noreferrer',
        },
        {
          children: [
            jsx_runtime_1.jsx(
              'div',
              Object.assign({}, getStyles('collectionTagIcon'), {
                children: jsx_runtime_1.jsx(
                  'img',
                  {
                    src: 'https://gateway.pinata.cloud/ipfs/QmR1ntsfMTfNTJuA3Ho27HHMxz1dfK4hHmPNeiXqrLTK2v',
                    alt: 'Digital Twin',
                  },
                  void 0
                ),
              }),
              void 0
            ),
            jsx_runtime_1.jsx(
              'span',
              {
                children:
                  data && 'openseaInfo' in data
                    ? `${data.openseaInfo.asset_contract.name}`
                    : 'Digital Twin',
              },
              void 0
            ),
          ],
        }
      ),
      void 0
    )
  }
  return jsx_runtime_1.jsx(
    'div',
    Object.assign(
      {
        className: css_1.css`
    position: relative;
    display: flex;
    flex-direction: row;
  `,
      },
      { children: getContent() }
    ),
    void 0
  )
}

export default function Piece({ initialData }: PieceProps) {
  const { query, push } = useRouter()
  const [marketPriceEth, setMarketPriceEth] = useState(2500)
  // console.log('market eth is',marketEth)
  const [currentTime, setCurrentTime] = useState(moment.now())
  const [timeDifference, setTimeDifference] = useState('a few seconds')
  const getMarketPrice = () => {
    fetch('https://data.messari.io/api/v1/assets/eth/metrics/market-data')
      .then((response) => response.json())
      .then((res) => setMarketPriceEth(res.data.market_data.price_usd))
  }

  useEffect(() => {
    // console.log("from first useeffect")
    getMarketPrice()
  }, [])

  useEffect(() => {
    // console.log("first second use effect")
    const interval = setInterval(() => {
      setTimeDifference(moment(currentTime).fromNow(true))
    }, 10000)
    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <SiteContainer>
      <Head>
        <title>Auction Page | Digitalxtwin</title>
        <meta
          name="Digital Twin"
          content="Digital Twin is a curated marketplace for fine jewelry.L'Dezen and Digital Twin Limitless Earrings NFT drop."
        />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <Header />

      <MediaConfiguration networkId={NETWORK_ID as NetworkIDs} style={styles}>
        <PageWrapper>
          <NFTFullPage
            useBetaIndexer={true}
            contract={query.contract as string}
            id={query.id as string}
            initialData={initialData}
          >
            <FullComponents.MediaFull />

            <div className="auction_body">
              <div className="auction_left">
                {/* <div className="limitless_icon_txt">
                      <img src = "/images/dt_logo.png" />
                      <p>Digital Twin</p>
                  </div> */}
                <CollectionTag />
                <div className="auction_desc">
                  <h2>{initialData.nft.tokenData.metadata.json.name}</h2>
                  <p>Introducing fine jewelery</p>
                  <p>in its digi-physical form.</p>
                  <p>The Limitless earrings are 18K gold diamond,</p>
                  <p>one-of-a-kind design.</p>
                  <p>Comfortable and elegant,</p>
                  <p>Bold, yet feminine.</p>
                  <br />
                  <p>The enamel in Pantone’s Very Peri color of 2022</p>
                  <p>embodies our spirit.</p>
                  <p>A dynamic periwinkle blue</p>
                  <p>with a vibrant, violet-red undertone</p>
                  <p>designed to evoke the glowing touchscreens</p>
                  <p>of the digital world</p>
                  <p>and the creative possibilities</p>
                  <p>of the future.</p>
                  <br />
                  <p>The Limitless Earrings enable</p>
                  <p>seamless movement between</p>
                  <p>the digital and physical.</p>
                  <p>Representing a time when</p>
                  <p>our real and online lives</p>
                  <p>are intertwined.</p>
                  <br />
                  <p>
                    Your Digital Twin awaits with L’Dezen Limitless Earrings.
                  </p>
                  {/* <p>{initialData.nft.tokenData.metadata.json.description}</p> */}
                  {/* <FullComponents.AuctionInfo/> */}
                  {/* <FullComponents.MediaInfo/> */}
                </div>
                <div className="minter">
                  <p>MINTER</p>
                  <div className="minter_detail">
                    <img src="/images/founder.png" />
                    <p>
                      <b>ldezenbypayalshah.eth</b> minted this NFT
                    </p>
                  </div>
                </div>

                <div className="net_details">
                  <p className="net_title">NFT DETAILS</p>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>Contract Address</p>
                    </div>
                    <div className="net_right">
                      <p>
                        {initialData.nft.tokenData.address.slice(0, 5)}...
                        {initialData.nft.tokenData.address.slice(29)}
                      </p>
                      {/* <img src="/images/arrow.png" /> */}
                      <CopyToClipboard text={initialData.nft.tokenData.address}>
                        <img src="/images/gradient.png" />
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>Token ID</p>
                    </div>
                    <div className="net_right">
                      <p>{initialData.nft.tokenData.tokenId}</p>
                      <CopyToClipboard text={initialData.nft.tokenData.tokenId}>
                        <img src="/images/gradient.png" />
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>Blockchain</p>
                    </div>
                    <div className="net_right">
                      <p>Ethereum</p>
                    </div>
                  </div>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>IPFS</p>
                    </div>
                    <div className="net_right">
                      <img
                        src="/images/arrow.png"
                        onClick={() => {
                          // replace(
                          //   initialData.nft.tokenData.metadata.json.image_url
                          // )
                          window.open(
                            'https://zora-prod.mypinata.cloud/ipfs/QmU2T8shz1KgHwSw5C3fiEkRHSeJLZv4wy78CsEmmctSxd',
                            '_blank'
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>IPFS Metadata</p>
                    </div>
                    <div className="net_right">
                      <img
                        src="/images/arrow.png"
                        onClick={() => {
                          window.open(
                            'https://zora-prod.mypinata.cloud/ipfs/Qme4kgC54GUmuPtwKiSVVQEnisiZUaGrR1iQwaGNbwUMfk',
                            '_blank'
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div className="detail_item">
                    <div className="net_left">
                      <p>Etherscan Transaction</p>
                    </div>
                    <div className="net_right">
                      <img
                        src="/images/arrow.png"
                        onClick={() => {
                          window.open(
                            'https://etherscan.io/token/0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9?a=1',
                            '_blank'
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div className="refresh">
                    <button
                      style={{
                        background: 'white',
                        border: '0',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setCurrentTime(moment.now())
                      }}
                    >
                      <p className="refresh_meta">Refresh Metadata</p>
                    </button>
                    <p className="updated_mins" id="chnage">
                      Updated {timeDifference} ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="auction_right">
                <div className="price_date_btn">
                  <div className="reserve_price">
                    <p>RESERVE PRICE</p>
                    <h2>~{(5200 / marketPriceEth).toFixed(3)} ETH</h2>
                    <p>$5,200 USD</p>
                  </div>
                  <div className="start_date">
                    {/* {
                      initialData.nft.auctionData && initialData.nft.auctionData.expectedEndTimestamp ?
                      <>
                        <p>AUCTION ENDS ON</p>
                        <h2>{moment(initialData.nft.auctionData.expectedEndTimestamp).toNow(true)}</h2>
                      </>
                      :
                      <>
                        <p>AUCTION STARTS ON</p>
                        <h2>March 10, 2022</h2>
                      </>
                    } */}
                    <FullComponents.AuctionInfo />
                  </div>
                  <div className="bid_btn">
                    <Button
                      onClick={() => {
                        push('./../../bidpage')
                      }}
                    >
                      Place Bid
                    </Button>
                  </div>
                </div>
                <div className="history_detail">
                  {/* <p>HISTORY</p>
                    <div className="history_detail">
                      <div className="img_with_txt">
                        <img src="/images/founder.png" />
                        <p><b>ldezenbypayalshah.eth</b> minted this NFT</p>
                      </div>
                      <div className="eth_usd">
                        <p className="eth">1.5 eth</p>
                        <p className="usd">$5,200 usd</p>
                      </div>
                    </div> */}
                  <FullComponents.BidHistory />
                </div>
              </div>
            </div>
          </NFTFullPage>
        </PageWrapper>
      </MediaConfiguration>
    </SiteContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id || Array.isArray(params.id)) {
    return { notFound: true }
  }
  if (!params?.contract || Array.isArray(params.contract)) {
    return { notFound: true }
  }

  const id = params.id as string
  const contract = params.contract as string

  const fetchAgent = new MediaFetchAgent(NETWORK_ID as NetworkIDs)
  const data = await FetchStaticData.fetchZoraIndexerItem(fetchAgent, {
    tokenId: id,
    collectionAddress: contract,
  })

  // console.log(data)
  const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(data)
  // console.log(tokenInfo)

  // writeFileSync('tokeninfo.json',JSON.stringify(data))
  // console.log(data.nft.tokenData.tokenContract)
  // const result = await fetchAgent.fetch
  // console.log(await fetchAgent.loadNFTData(tokenInfo.tokenContract,tokenInfo.tokenId))
  // https://gateway.pinata.cloud/ipfs/QmaT7qvfDF8TsncoQkiv4ZUj3KcXas9CGcQ9AZKjfaJ2zj
  return {
    props: {
      id,
      name: tokenInfo.metadata?.name || null,
      description: data.nft.tokenData.metadata || null,
      // image: tokenInfo.image || null,
      image: data.nft.tokenData.tokenURI,
      initialData: data,
    },
  }
}
