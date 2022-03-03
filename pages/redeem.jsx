import Layout from '../components/Layout'
import React from 'react'
import LuxurySection from '../components/Redeem/LuxurySection'
import DiscoverTwinContent from '../components/Redeem/DiscoverTwinSection'
import FaqContent from '../components/Redeem/FaqSection'
const RedeemPage = () => {
  return (
    <Layout title="Redeem">
      <LuxurySection />
      <DiscoverTwinContent />
      <FaqContent />
    </Layout>
  )
}

export default RedeemPage
