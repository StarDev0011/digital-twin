import React from 'react'
import Layout from '../../components/Layout'
import ConnectBox from '../../components/RedeemPhysical/ConnectBox'
import ConnectButton from '../../components/ConnectButton'
import DetailBox from '../../components/RedeemPhysical/DetailBox'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers, Contract, ethers } from 'ethers'
import { useCallback, useEffect, useReducer, useState } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { abi as DigitalTwinAbi } from '../../DigitalTwin.json'

// import {a} from '@zoralabs/auction-house/dist/artifacts/interfaces/IAuctionHouse.sol/IAuctionHouse.json'
const INFURA_ID = '82acffcf5a3c4987a0766b846d793dcb'
const TOKEN_ID = 1
// const CONTRACT_ADDRESS = '0xd391646321ccf7938821a01d169dea6922aedbba'
const CONTRACT_ADDRESS = '0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9'
// import { SiteContainer } from '../../atoms/SiteContainer/index'
// import { DetailBoxSection } from './../../components/RedeemPhysical/DetailBox/styles'
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  contract: null,
  balance: '0',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        balance: action.balance,
        contract: action.contract,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
        balance: action.balance,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'SET_CONTRACT_INSTANCE':
      return {
        ...state,
        contract: action.contract,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

const Physical = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, balance, contract, address, chainId } = state

  const [isNftHolder, setIsNftHolder] = useState(false)

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.

    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    // const interfaceAbi = new ethers.utils.Interface(AuctionHouseAbi)

    const instance = new Contract(
      CONTRACT_ADDRESS,
      DigitalTwinAbi,
      signer
    )

    const balance = ethers.utils.formatEther(
      await web3Provider.getBalance(address)
    )
    // console.log(instance)

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
      contract: instance,
      balance,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = async (accounts) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        web3Provider.getBalance(accounts[0]).then((res) => {
          const etherString = ethers.utils.formatEther(res)
          dispatch({
            type: 'SET_ADDRESS',
            address: accounts[0],
            balance: etherString,
          })
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload()
      }

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const validateOwner = async () => {
    if (contract && web3Provider && 4 == chainId) {
      // console.log(contract)
      const ownerAddress = await contract.functions.ownerOf(TOKEN_ID)
      // console.log('Owner of the NFT is', ownerAddress)
      //  console.log("address is",address)
      if (ownerAddress == ethers.utils.getAddress(address)) {
        setIsNftHolder(true)
        // console.log("the connected address is the token owner")
      } else {
        // console.log("hey I am called")
        setIsNftHolder(false)
      }
    }
  }

  const redeemNFT = () => {
    return new Promise((resolve, reject) => {
      if (isNftHolder) {
        // setLoading(true)

        if (
          ethers.utils.getAddress(address) ==
          '0xc6367B688453b894bE0688E329259C42b1F040e6'
        ) {
          alert('Minter and token holder are same')

          // setLoading(false)
          return
        } else {
          //Always remember, caused a lot of trouble
          //syntax to call the overloaded function in ethers
          try {
            const tx = Promise.resolve(
              contract['safeTransferFrom(address,address,uint256)'](
                ethers.utils.getAddress(address),
                '0xc6367B688453b894bE0688E329259C42b1F040e6',
                TOKEN_ID
              )
            )

            resolve(tx)
          } catch (err) {
            // return err
            alert('Some error occured while redeeming!')
            reject(false)
          }

          // setLoading(false)
        }
      }
    })
  }

  // const uploadUserData = async()=>{
  //   //sending the user data to the
  // }

  useEffect(() => {
    //   console.log("I am called from validate")
    validateOwner()
  }, [address, balance])

  // const handleWalletConected = () => {
  //   setWalletConnected(true)
  // }

  return (
    <Layout>
      {/* <ConnectButton handleWalletConected={handleWalletConected} />
      {walletConnected ? <DetailBox /> : <ConnectBox />} */}

      <ConnectButton
        connect={connect}
        isConnected={web3Provider ? true : false}
        disconnect={disconnect}
      />
      {web3Provider ? (
        isNftHolder ? (
          !showDetail ? (
            <ConnectBox
              balance={balance}
              isWalletConnected={true}
              title={'Successfully applied!'}
              subtitle={
                'Your wallet containts the ‘Limitless’ Earrings. Enter Shipping details to redeem the physical earrings. '
              }
              isErrorMessage={false}
              isNftPresent={true}
              setDetail={setShowDetail}
            />
          ) : (
            <DetailBox redeemNFT={redeemNFT} setDetail={setShowDetail} />
          )
        ) : (
          <ConnectBox
            balance={balance}
            isWalletConnected={true}
            title={'Error'}
            subtitle={
              'Your wallet does not contain the ‘Limitless’ Earring NFT. You cannot redeem the physical item. '
            }
            isErrorMessage={true}
            isNftPresent={false}
            setDetail={setShowDetail}
          />
        )
      ) : (
        <ConnectBox
          balance={null}
          isWalletConnected={false}
          title={'Connect your Wallet to Get Started. '}
          subtitle={
            'If your wallet containts the ‘Limitless’ Earrings you will be prompted to enter Shipping details to redeem the physical earrings. '
          }
          isErrorMessage={false}
          isNftPresent={false}
          setDetail={setShowDetail}
        />
      )}

      {/* {
       showDetail ?
       <p>True</p>:
       <p>False</p>
     } */}
    </Layout>
  )
}

export default Physical
