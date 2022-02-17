import AboutHero from "../components/About/AboutHero";
import AboutInfo from "../components/About/AboutInfo";
import AboutMission from "../components/About/AboutMission";
import AboutVision from "../components/About/AboutVision";
import Layout from "../components/Layout";
import NewsletterSection from "../components/About/NewsletterSection";
import React from "react";
const AboutPage = () => {
  return (
    <Layout title="About Us">
      <AboutHero />
      <AboutMission />
      <AboutVision />
      <AboutInfo />
      <NewsletterSection />
    </Layout>
  );
};

export default AboutPage;
