import React, { useState } from 'react';
import Layout from '../../components/Layout'
import ConnectBox from '../../components/RedeemPhysical/ConnectBox'
import ConnectButton from '../../components/ConnectButton'
import DetailBox from '../../components/RedeemPhysical/DetailBox'

const Physical = () => {
    const [walletConnected, setWalletConnected] = useState(false)

    const handleWalletConected = () => {
        setWalletConnected(true)
    }

    return (
        <Layout>
                <ConnectButton handleWalletConected={handleWalletConected} />
                {
                (walletConnected) 
                ? 
                <DetailBox />
                :
                <ConnectBox />
                }        
        </Layout>
    )
}

export default Physical;
