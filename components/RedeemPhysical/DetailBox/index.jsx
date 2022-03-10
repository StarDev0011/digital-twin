import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { DetailBoxSection } from './styles'
const DetailBox = ({ redeemNFT, setDetail }) => {
  return (
    <SiteContainer>
      <DetailBoxSection>
        <div className="ship-top-bar p-4">
          <p>Create Order</p>
          <img src="/images/ship-success.png" />
          <p>Shipping</p>
        </div>

        <h2 className="title">Shipping Details</h2>

        <div className="shipping-detail-row">
          <div className="left-bx">
            <form
              action="https://getform.io/f/3453ba43-09e2-4466-9414-94243fb53063"
              method="POST"
              className="shipping-form"
            >
              <div className="form-group">
                <label>
                  Email Address<b>*</b>
                </label>
                <input type="email" name="email" />
              </div>

              <div className="form-group">
                <label>
                  First Name<b>*</b>
                </label>
                <input type="text" name="fname" />
              </div>

              <div className="form-group">
                <label>
                  Last Name<b>*</b>
                </label>
                <input type="text" name="lname" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="form-group">
                <label>
                  Street Address<b>*</b>
                </label>
                <input type="text" name="address" />
              </div>

              <div className="form-group">
                <label>
                  Apartment, etc<b>*</b>
                </label>
                <input type="text" name="apartment" />
              </div>

              <div className="form-group">
                <label>
                  City<b>*</b>
                </label>
                <input type="text" name="city" />
              </div>

              <div className="form-group">
                <label>
                  Zip Code<b>*</b>
                </label>
                <input type="text" name="z-code" />
              </div>

              <div className="form-group">
                <label htmlFor="country">
                  Country <b>*</b>
                </label>
                {/* <select className="form-control" id="country">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select> */}
                <input type="text" name="country" />
              </div>

              <div className="form-group">
                <label htmlFor="State">
                  State/Province <b>*</b>
                </label>
                {/* <select className="form-control" id="state">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select> */}
                <input type="text" name="state" />
              </div>
              <button type="submit" id="submit-botton" hidden>
                Redeem
              </button>
            </form>
          </div>

          <div className="right-bx">
            <div className="order-summary">
              <h2 className="title">Shipping Details</h2>

              <div className="form-group">
                {/* <form>
                  <select className="form-control" id="state">
                    <option>1 Item In Cart</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </form> */}

                <div className="order-detail-bx">
                  <img src="/images/earrings-1.png" />
                  <div className="summary-text">
                    <h4>Limitless Earrings</h4>
                    <p>
                      Qty: <b>1</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-detail-bottom">
              <p>
                Note: Your NFT will be transferred to L’Dezen upon redemption.
                Upon physical redemption, Digital Twin will transfer a digital
                only version of the NFT to the redeemers wallet. This will act
                as your certificate of physical redemption.
              </p>
              <a
                onClick={async () => {
                  await redeemNFT()
                  document.getElementById('submit-botton').click()
                }}
                style={{ cursor: 'pointer' }}
              >
                Redeem
              </a>
            </div>

            <a
              onClick={() => setDetail(false)}
              style={{ cursor: 'pointer' }}
              className="back-btn"
            >
              Back
            </a>
          </div>
        </div>
      </DetailBoxSection>
    </SiteContainer>
  )
}

export default DetailBox
