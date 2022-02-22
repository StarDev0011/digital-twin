import AboutSection from '../components/Homepage/AboutSection'
import HowItWorks from '../components/Homepage/HowItWorks'
import LDezen from '../components/Homepage/LDezen'
import Layout from '../components/Layout'
import React from 'react'
import Vision from '../components/Homepage/Vision'
import Roadmap from '../components/Homepage/Roadmap'
import Limitless from '../components/Homepage/Limitless'
import SimpleSlider from '../components/Homepage/Slider'
import Splash from '../components/Splash'

const Home = () => {
 
  return (
    <Layout title="Homepage">
      
        <Splash />
      
          <SimpleSlider />
      <Limitless />
      <AboutSection />
      <LDezen />
      <Vision />
      <HowItWorks />
      <Roadmap />
       
      
      
      
    </Layout>
  )
}

export default Home
