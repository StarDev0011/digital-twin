import { FileUploadWrapper } from './styles'
import React from 'react'
import styled from 'styled-components';
// Style the Button component
const Button = styled.button`
  /* Insert your favorite CSS code to style a button */
`;

const DetailBox = ({ setDetail }) => {

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
  };
 
  return (
    <FileUploadWrapper>
      <div className="container">
        <div className="ship-top-bar p-4">
          <p>Create Order</p>
          <img src="/images/ship-success.png" />
          <p>Accesorize Your PFP</p>
        </div>
        <div className="shipping-detail-row">
          <div className="left-bx">
            <h2 className="title">Contact Information:</h2>
            <form
              action="https://getform.io/f/2625eb5b-28d6-424e-b73a-555740beaa4e"
              method="POST"
              className="shipping-form"
              enctype="multipart/form-data"
              
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
             
                

                
              
              
                    
             
                    
              <a onClick={handleClick}>
                Upload a file
              </a>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
        name="media"
      />     

             

              <button type="submit" id="submit-button" hidden>
                Submit
              </button>
            </form>
          </div>

          <div className="right-bx">
            <div className="order-summary">
              <h2 className="title">Order Summary</h2>

              <div className="form-group">
                <div className="order-detail-bx">
                  <img src="/images/earrings-1.png" />
                  <div className="summary-text">
                    <h4>
                      Limitless Earrings Digitally Rendered on Your PFP of
                      Choice.
                    </h4>
                    <p>
                      Qty: <b>1</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-detail-bottom">
              <a
                onClick={async () => {
                  document.getElementById('submit-button').click()
                  
                }}
                style={{ cursor: 'pointer' }}
              >
                Submit
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
      </div>
    </FileUploadWrapper>
  )
}

export default DetailBox
