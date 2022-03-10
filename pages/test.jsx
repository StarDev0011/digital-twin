//import DetailBox from '../components/RedeemPhysical/DetailBox'
import Layout from '../components/Layout'
import SiteModal from '../atoms/SiteModal'
const Test = () => {
  const modalData = {
    type: 'success',
    title: 'Success',
    message:
      'Congrats, we received your shipping details. You will receive a confirmation email once your item has shipped.',
  }
  return (
    <Layout>
      {/* <DetailBox /> */}
      <SiteModal data={modalData} />
    </Layout>
  )
}

export default Test
