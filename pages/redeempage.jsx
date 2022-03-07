import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers, Contract, ethers } from 'ethers'
import { useCallback, useEffect, useReducer, useState } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { abi as DigitalTwinAbi } from '../DigitalTwin.json'
// import {a} from '@zoralabs/auction-house/dist/artifacts/interfaces/IAuctionHouse.sol/IAuctionHouse.json'
const INFURA_ID = '82acffcf5a3c4987a0766b846d793dcb'
// import { auctionHouse } from '@zoralabs/auction-house/dist/addresses/4.json'
// const TOKEN_ID = '1'
// const TOKEN_ADDRESS = '0xD391646321ccf7938821a01d169DeA6922AEDBba'
// const TOKEN_ADDRESS = `0x8aDd76A5c38da958dfFF9A58DdE51798d03C5ef9`
// const TOKEN_ID = '1'

// const CONTRACT_ADDRESS_MAINNET = ""
const TOKEN_ID = 6
const CONTRACT_ADDRESS_TESTNET = '0xd391646321ccf7938821a01d169dea6922aedbba'
import Layout from '../components/Layout'

// import { NETWORK_ID } from '../utils/env-vars'

// import { useRouter } from 'next/router'
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

// type StateType = {
//   provider?: any
//   web3Provider?: any
//   address?: string
//   chainId?: number
//   contract?: any
//   balance?: string
// }

// type ActionType =
//   | {
//       type: 'SET_WEB3_PROVIDER'
//       provider?: StateType['provider']
//       web3Provider?: StateType['web3Provider']
//       address?: StateType['address']
//       chainId?: StateType['chainId']
//       contract?: StateType['contract']
//       balance?: StateType['balance']
//     }
//   | {
//       type: 'SET_ADDRESS'
//       address?: StateType['address']
//       balance?: StateType['balance']
//     }
//   | {
//       type: 'SET_CHAIN_ID'
//       chainId?: StateType['chainId']
//     }
//   | {
//       type: 'RESET_WEB3_PROVIDER'
//     }
//   | {
//       type: 'SET_CONTRACT_INSTANCE'
//       contract?: StateType['contract']
//     }

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

export const RedeemPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, balance, contract, address, chainId } = state

  const [isNftHolder, setIsNftHolder] = useState(false)
  // const [loading,setLoading] = useState(false)

  // const { push } = useRouter()

  // const formState = {
  //   email : "xyz@google.com",
  //   first_name : "john",
  //   last_name : "doe",
  //   address : "Adelaide,Australia",
  //   apartment : "12th criss cross road",
  //   city : "Adelaide",
  //   country :"Australia",
  //   state : "South Australia",
  //   zip : "1345",
  //   phone : "9847382948"
  // }

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
      CONTRACT_ADDRESS_TESTNET,
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

  const redeemNFT = async () => {
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
          await contract['safeTransferFrom(address,address,uint256)'](
            ethers.utils.getAddress(address),
            '0xc6367B688453b894bE0688E329259C42b1F040e6',
            TOKEN_ID
          )
        } catch (err) {
          return err
        }

        alert('Token successfully redeemed!')
        // setLoading(false)
      }
    }
  }

  // const uploadUserData = async()=>{
  //   //sending the user data to the
  // }

  useEffect(() => {
    //   console.log("I am called from validate")
    validateOwner()
  }, [address, balance])

  return (
    <Layout title="Redeem page">
      <div className="container">
        <main>
          <div className="title_balance">
            {web3Provider ? (
              <div className="balance_connect">
                <button
                  className="connect_button"
                  type="button"
                  onClick={disconnect}
                >
                  Disconnect
                </button>
                <div className="bid_balance">
                  <h1 className="title">Reedem NFT</h1>
                  <h3>
                    Your balance : <span className="real_bal">{balance}</span>
                  </h3>
                </div>
              </div>
            ) : (
              <button
                className="connect_button"
                type="button"
                onClick={connect}
              >
                Connect Wallet
              </button>
            )}
          </div>
          {isNftHolder ? (
            <>
              <h1>Accessorize the PFP</h1>
              <form
                action="https://getform.io/f/55f6c0ba-f804-4787-9ec0-6571f8fe770d"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="text" name="message" />
                <input type="file" name="media" />
                {/* <input type="checkbox" name="subscribe" value="yes" checked/>
                <input type="hidden" name="subscribe" value="no"/> */}

                {/* <input type="radio" name="gender" value="male" checked/>
                <input type="radio" name="gender" value="female"/>
                <input type="radio" name="gender" value="other"/> */}

                {/* <select name="work-experience">
                    <option value="one-year">0-1 years</option>
                    <option value="one-five-years">1-5 years</option>
                    <option value="five-plus-years">5+ years</option>
                </select> */}
                <button type="submit">Send</button>
              </form>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <h1>Redeem your NFT for physical earrings</h1>
              <button
                className="place_bid_btn"
                onClick={() => {
                  redeemNFT()
                }}
              >
                Redeem
              </button>
            </>
          ) : (
            <>Sorry, you dont have an NFT to redeem</>
          )}
        </main>

        <style jsx>{`
          main {
            padding: 50px;
            width: 60%;
            margin-left: auto;
            margin-right: auto;
            box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 5px;
          }

          .connect_button {
            font-size: 16px;
            background: #000000;
            color: #ffffff;
            border: none;
            padding: 20px 75px;
            border-radius: 500px;
            font-weight: 700;
            cursor: pointer;
            position: absolute;
            top: 30px;
            right: 10%;
          }

          .bid_balance {
            display: flex;
            justify-content: space-between;
          }

          .title_balance {
            margin-bottom: 60px;
            text-align: center;
          }

          .title {
            font-size: 24px;
          }

          .balance_connect h3 {
            font-size: 18px;
            color: #969696;
          }

          .real_bal {
            color: #000000;
          }

          .eth_input {
            width: 100%;
            position: relative;
          }

          .eth_input input {
            width: 100%;
            background: #e5e5e5;
            border: 1px solid #000000;
            border-radius: 500px;
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
            padding: 20px;
            font-size: 18px;
            color: #000000;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .eth_input span {
            position: absolute;
            right: 20px;
            font-size: 18px;
            color: #000000;
            font-weight: 600;
            text-transform: uppercase;
            margin-top: 20px;
          }

          .min_eth,
          .min_percent {
            font-size: 18px;
            color: #969696;
            margin-bottom: 10px;
          }

          .place_bid_btn {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .place_bid_btn button {
            background: #000000;
            color: #ffffff;
            width: 60%;
            padding: 25px;
            border-radius: 500px;
            border: none;
            font-size: 18px;
            text-transform: uppercase;
            cursor: pointer;
          }

          .withdrawl {
            font-size: 18px;
            color: #000000;
            font-weight: bold;
          }

          .refresh_btn {
            width: fit-content;
            display: flex;
            cursor: pointer;
          }

          .refresh_btn p {
            font-size: 12px;
            color: #000000;
            font-weight: 700;
            margin-top: auto;
            margin-bottom: auto;
          }

          p {
            margin-top: 0;
          }

          .container {
            padding: 2rem;
            margin: 0 auto;
            max-width: 1200px;
          }

          .grid {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
          }

          .button {
            padding: 1rem 1.5rem;
            background: ${web3Provider ? 'red' : 'green'};
            border: none;
            border-radius: 0.5rem;
            color: #fff;
            font-size: 1.2rem;
          }

          .mb-0 {
            margin-bottom: 0;
          }
          .mb-1 {
            margin-bottom: 0.25rem;
          }
          @media screen and (max-width: 465px) {
            main {
              width: 98%;
              padding: 15px;
              margin: 30px auto;
              box-shadow: none;
              border: none;
            }
            .withdrawl,
            .balance_connect h3,
            .place_bid_btn button,
            .min_eth,
            .min_percent {
              font-size: 16px;
            }
            .place_bid_btn button {
              width: 80%;
            }
            .title {
              font-size: 18px;
            }
            .connect_button {
              position: relative;
              top: auto;
              right: auto;
              background: #ffffff;
              color: #000000;
              border: solid 1px;
              padding: 10px 20px;
            }
            .title_balance {
              position: relative;
            }
            .title_balance::before {
              content: '';
              top: 20px;
              position: absolute;
              width: calc(100% + 2 * (2rem + 15px));
              height: 1px;
              background: #000;
              left: calc(0% - 2rem - 15px);
            }
            .eth_input input {
              width: 100%;
              background: #ffffff;
              border: none;
              border-bottom: 1px solid #000000;
              border-radius: 0px;
              box-shadow: none;
              padding: 10px;
            }
            .eth_input span {
              margin-top: 10px;
              right: 10px;
            }
            .bid_warn,
            .bid_refresh {
              display: flex;
            }
            .min_eth {
              width: 40%;
              font-size: 12px;
              padding-right: 25px;
            }
            .min_percent {
              width: 60%;
              font-size: 12px;
              padding-left: 25px;
            }
            .refresh_btn {
              width: 40%;
            }
            .withdrawl {
              width: 60%;
              font-size: 12px;
              margin-top: auto;
              margin-bottom: auto;
            }
            .place_bid_btn {
              margin-bottom: 20px;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default RedeemPage
