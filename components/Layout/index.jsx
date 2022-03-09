import Footer from '../Footer/index'
import Head from 'next/head'
import Header from '../Header/index'
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Digitalxtwin</title>
        <meta
          name="Digital Twin"
          content="Digital Twin is a curated marketplace for fine jewelry.L'Dezen and Digital Twin Limitless Earrings NFT drop."
        />
        <link rel="icon" href="/images/logo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
