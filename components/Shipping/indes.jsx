import { ShippingWrapper, ShippingBody } from './styles'
import { SiteContainer } from '../../atoms/SiteContainer'
const Shipping = () => {
  return (
    <ShippingWrapper>
      <SiteContainer>
        <ShippingBody>
          <div className="contact_us">
            <p>
              <b>Contact Us:</b> All questions & shipping inquiries{' '}
            </p>
          </div>
          <div className="contact_btn">
            <a href="mailto:support@digitalxtwin.io">support@digitalxtwin.io</a>
          </div>
        </ShippingBody>
      </SiteContainer>
    </ShippingWrapper>
  )
}

export default Shipping
