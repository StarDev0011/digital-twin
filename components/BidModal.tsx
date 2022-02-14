
import {abi as AuctionHouseAbi} from '../node_modules/@zoralabs/auction-house/dist/artifacts/AuctionHouse.sol/AuctionHouse.json'
import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {weth,auctionHouse} from '../node_modules/@zoralabs/auction-house/dist/addresses/4.json'
import { ConnectorEvent } from '@web3-react/types';
import { async } from 'q';

export const BidModal = () => {
  const [err,setErr] = useState<string>()
  const [currentBid]= useState<number>()
  const [auctionHouseInstance,setAuctionHouseInstance] = useState<any>(null)
  const [isWalletConnected,setIsWalletConnected] = useState<boolean>(false)
  
  // const [provider,setProvider] = useState<any>()
  let provider:any
  const connectWallet = async ()=>{
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "82acffcf5a3c4987a0766b846d793dcb" // required
        }
      }
    };

    const getAccounts = async()=>{

    }

    const web3Modal = new Web3Modal({
        
        providerOptions // required
      });

      try{
        const connection = await web3Modal.connect()
        provider = new ethers.providers.Web3Provider(connection)
        
        
        const signer = await provider.getSigner()
        provider.on("accountsChanged", (accounts: string[]) => {
          console.log("Changed accounts are",accounts);
        });
        // console.log(await provider._getAddress)
        console.log(signer)
        // await web3Modal.clearCachedProvider()
        if ((await provider.listAccounts()).length == 0){
           
           await web3Modal.clearCachedProvider()
        }
        console.log("Account used is ",(await provider.listAccounts())[0])
        
        
      }catch(err){
        
        console.log(`Error occured`,err)
      }
  
  }

  // provider?.on("accountsChanged", (accounts: string[]) => {
  //   console.log("Changed accounts are",accounts);
  // });

  const disconnectWallet = ()=>{

  }

  const makeBid = async()=>{

  }
  

  useEffect( ()=>{
    connectWallet()
    window.addEventListener(ConnectorEvent.Update,(data)=>{
      console.log("Listenend success",data)
    })
  })
  return (
    <div css={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      
      <p>
        {async()=>JSON.stringify(await provider.listAccounts())}
      </p>
    </div>
  );
};
