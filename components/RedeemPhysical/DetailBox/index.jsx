import React from 'react'
import { SiteContainer } from '../../../atoms/SiteContainer'
import { DetailBoxSection } from './styles'
const DetailBox = () => {
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
            <form action="" className="shipping-form">
              <div className="form-group">
                <label>
                  Email Address<b>*</b>
                </label>
                <input type="email" name="email" value="" />
              </div>

              <div className="form-group">
                <label>
                  First Name<b>*</b>
                </label>
                <input type="text" name="fname" value="" />
              </div>

              <div className="form-group">
                <label>
                  Last Name<b>*</b>
                </label>
                <input type="text" name="lname" value="" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="form-group">
                <label>
                  Street Address<b>*</b>
                </label>
                <input type="text" name="address" value="" />
              </div>

              <div className="form-group">
                <label>
                  Apartment, etc<b>*</b>
                </label>
                <input type="text" name="apartment" value="" />
              </div>

              <div className="form-group">
                <label>
                  City<b>*</b>
                </label>
                <input type="text" name="city" value="" />
              </div>

              <div className="form-group">
                <label>
                  Zip Code<b>*</b>
                </label>
                <input type="text" name="z-code" value="" />
              </div>

              <div className="form-group">
                <label htmlFor="country">
                  Country <b>*</b>
                </label>
                <select className="form-control" id="country">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="State">
                  State/Province <b>*</b>
                </label>
                <select className="form-control" id="state">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </form>
          </div>

          <div className="right-bx">
            <div className="order-summary">
              <h2 className="title">Shipping Details</h2>

              <div className="form-group">
                <form>
                  <select className="form-control" id="state">
                    <option>1 Item In Cart</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </form>

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
              </p>
              <a href="">Redeem</a>
            </div>

            <a href="/redeem/physical" className="back-btn">
              Back
            </a>
          </div>
        </div>
      </DetailBoxSection>
    </SiteContainer>
  )
}

export default DetailBox
