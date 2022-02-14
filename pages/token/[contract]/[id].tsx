import { NFTFullPage, MediaConfiguration,FullComponents } from "@zoralabs/nft-components";
import { useRouter } from "next/router";
import {
  MediaFetchAgent,
  NetworkIDs,
  FetchStaticData,
} from "@zoralabs/nft-hooks";

import { GetServerSideProps } from "next";
import { NETWORK_ID, APP_TITLE } from './../../../utils/env-vars'
import { PageWrapper } from "../../../styles/components";
import Head from "../../../components/head";
import styled from 'styled-components';

import React,{useState,useEffect} from "react";

import {writeFileSync} from 'fs';
import {BidPage} from '../../bidpage'
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
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
type PieceProps = {
  name: string;
  description: string;
  image: string;
  initialData: any;
};

export default function Piece({
  name,
  description,
  image,
  initialData,
}: PieceProps) {
  const { query,push } = useRouter();
//   const router = useRouter();
  

  return (
    <>
   
      <Head
        // title={`${name} | ${APP_TITLE}`}
        title = "mith"
        description={description}
        ogImage={image}
      />
      <MediaConfiguration
        networkId={NETWORK_ID as NetworkIDs}
        style={styles}
      >
        <PageWrapper>
          <NFTFullPage
            useBetaIndexer={true}
            contract={query.contract as string}
            id={query.id as string}
            initialData={initialData}
          >
            <FullComponents.MediaFull />
            <FullComponents.CollectionTag/>
            <FullComponents.MediaInfo/>
            <FullComponents.ProofAuthenticity/>
            <FullComponents.AuctionInfo/>
           
            <FullComponents.BidHistory/>
            <FullComponents.CreatorEquity/>
            </NFTFullPage>
            <Button
                onClick={(evt) =>
                    push(
                      `../../bidpage`
                    )
                  }
            >Place Bid</Button>
        </PageWrapper>
      </MediaConfiguration>
    </>
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
  console.log(data)
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
