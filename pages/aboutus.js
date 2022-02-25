import AboutHero from '../components/About/AboutHero'
import AboutInfo from '../components/About/AboutInfo'
import AboutMission from '../components/About/AboutMission'
import AboutVision from '../components/About/AboutVision'
import Triangle from '../components/About/Triangle'
import Layout from '../components/Layout'
import NewsletterSection from '../components/About/NewsletterSection'
import React from 'react'
const AboutPage = () => {
  return (
    <Layout title="About Us">
      <AboutHero />
      <AboutMission />
      <AboutVision />
      <AboutInfo />
      <Triangle />
      <NewsletterSection />
    </Layout>
  )
}

export default AboutPage
