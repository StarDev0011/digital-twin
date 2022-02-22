import Footer from '../Footer/index'
import Head from 'next/head'
import Header from '../Header/index'
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Digitalxtwin</title>
        <meta name="Digital Twin" content="Digital Twin is a curated marketplace for fine jewelry.L'Dezen and Digital Twin Limitless Earrings NFT drop." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
