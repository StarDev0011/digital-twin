import { NFTFullPage, MediaConfiguration,FullComponents } from "@zoralabs/nft-components";
import router, { useRouter } from "next/router";
import {
  MediaFetchAgent,
  NetworkIDs,
  FetchStaticData,
} from "@zoralabs/nft-hooks";

import { GetServerSideProps } from "next";
import { NETWORK_ID } from './../../../utils/env-vars'
import { PageWrapper } from "../../../styles/components";

import styled from 'styled-components';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import {writeFileSync} from 'fs';
import { SiteContainer } from "../../../atoms/SiteContainer";
import Header from "../../../components/Header/index"
// const providerOptions = {
//   /* See Provider Options Section */
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });



const styles = {
  theme: {
    lineSpacing: 24,
    linkColor: "var(--black)",
  },
};
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 100px;
  border-radius: 50px;
  border:none;
  margin: 10px auto;
  cursor: pointer;
  @media (max-width: 465px) {
    padding: 20px 60px; 
  }
`;
type PieceProps = {
  name: string;
  description: string;
  image: string;
  initialData: any;
};

export default function Piece({
  initialData,
}: PieceProps) {
  const { query } = useRouter();
//   const router = useRouter();
  

  return (
    <SiteContainer>
      <Header />
        
        <MediaConfiguration networkId={NETWORK_ID as NetworkIDs} style={styles}>
          <PageWrapper>
            <NFTFullPage useBetaIndexer={true} contract={query.contract as string} id={query.id as string} initialData={initialData}>
              <FullComponents.MediaFull />
              <div className="auction_body">
                <div className="auction_left" >
                  {/* <div className="limitless_icon_txt">
                      <img src = "/images/dt_logo.png" />
                      <p>Digital Twin</p>
                  </div> */}
                  <FullComponents.CollectionTag/>
                  <div className="auction_desc">
                    <h2>{initialData.nft.tokenData.metadata.json.name}</h2>
                    {/* <p>Introducing fine jewelery</p>
                    <p>in its digi-physical form.</p>
                    <p>The first 1/1 NFT by L’Dezen x Payal Shah</p>
                    <br />
                    <p>The Limitless earrings are a unique,</p>
                    <p>one-of-a-kind design.</p>
                    <p>Luxurious, lightweight designs.</p>
                    <p>Comfortable and Elegant,</p>
                    <p>Bold Yet</p>
                    <p>Feminine.</p>
                    <br />
                    <p>Available to Redeem & Ship in Physical Form:</p>
                    <p>On International Women’s Day - March 8th, 2022</p> */}
                    <p>{initialData.nft.tokenData.metadata.json.description}</p>
                    {/* <FullComponents.AuctionInfo/> */}
                    {/* <FullComponents.MediaInfo/> */}
                  </div>
                  <div className="minter">
                    <p>MINTER</p>
                    <div className="minter_detail">
                      <img src="/images/founder.png" />
                      <p><b>ldezenbypayalshah.eth</b> minted this NFT</p>
                    </div>
                  </div>
                  <div className="net_details">
                    <p className="net_title">NFT DETAILS</p>
                    <div className="detail_item">
                      <div className="net_left">
                        <p>Contract Address</p>
                      </div>
                      <div className="net_right">
                        <p>{initialData.nft.tokenData.address}</p>
                        {/* <img src="/images/arrow.png" /> */}
                        <CopyToClipboard text = {initialData.nft.tokenData.address}>
                          <img src = "/images/gradient.png" />
                        </CopyToClipboard>
                      </div>
                    </div>
                    <div className="detail_item">
                      <div className="net_left">
                        <p>Token ID</p>
                      </div>
                      <div className="net_right">
                        <p>{initialData.nft.tokenData.tokenId}</p>
                        <CopyToClipboard text = {initialData.nft.tokenData.tokenId}>
                          <img src = "/images/gradient.png" />
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
                        <img src="/images/arrow.png" onClick={()=>{router.replace(initialData.nft.tokenData.metadata.json.image_url)}}/>
                      </div>
                    </div>
                    <div className="detail_item">
                      <div className="net_left">
                        <p>IPFS Metadata</p>
                      </div>
                      <div className="net_right">
                        <img src="/images/arrow.png" onClick={()=>{router.replace(initialData.nft.tokenData.tokenURI)}}/>
                      </div>
                    </div>
                    <div className="detail_item">
                      <div className="net_left">
                        <p>Etherscan Transaction</p>
                      </div>
                      <div className="net_right">
                        <img src="/images/arrow.png" />
                      </div>
                    </div>
                    {/* <div className="refresh">
                      <p className="refresh_meta">Refresh Metadata</p>
                      <p className="updated_mins">Updated 2 minutes ago</p>
                    </div> */}
                  </div>
                </div>
                <div className="auction_right">
                  <div className="price_date_btn">
                    <div className="reserve_price">
                      <p>RESERVE PRICE</p>
                      <h2>~1.75 ETH</h2>
                      <p>~5,200 USD</p>
                    </div>
                    <div className="start_date">
                      <p>AUCTION STARTS ON</p>
                      <h2>March 1, 2022</h2>
                    </div>
                    <div className="bid_btn">
                      <Button 
                      // onClick={(evt) =>
                          // push(
                          //   `../../bidpage`
                          // )
                          
                        // }
                        >Coming Soon</Button>
                    </div>
                  </div>
                  <div >
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
                    <FullComponents.BidHistory/>
                  </div>
                </div>
              </div>
            </NFTFullPage>
          </PageWrapper>
        </MediaConfiguration>
    </SiteContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id || Array.isArray(params.id)) {
    return { notFound: true };
  }
  if (!params?.contract || Array.isArray(params.contract)) {
    return { notFound: true };
  }

  const id = params.id as string;
  const contract = params.contract as string;

  const fetchAgent = new MediaFetchAgent(
    NETWORK_ID as NetworkIDs
  );
  const data = await FetchStaticData.fetchZoraIndexerItem(fetchAgent, {
    tokenId: id,
    collectionAddress: contract,
  });

  const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(data);
  // console.log(tokenInfo)
  
  writeFileSync('tokeninfo.json',JSON.stringify(data))
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
      image : data.nft.tokenData.tokenURI,
      initialData: data,
    },
  };
};