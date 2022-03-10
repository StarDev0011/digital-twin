import { FileUploadWrapper } from './styles'
import { useDropzone } from 'react-dropzone'
const DetailBox = ({ setDetail }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ))
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
              action="https://getform.io/f/55f6c0ba-f804-4787-9ec0-6571f8fe770d"
              method="POST"
              className="shipping-form"
              enctype="multipart/form-data"
              target="_blank"
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
              {/* <div className="form-group">
                <div>
                  <div className="choose-file-box">
                    <span className="for-border"> 
                    <h2>Choose File</h2>
                    </span>
                  </div>
                </div>
              </div> */}
              {/* <input type="file" name="media" id="ids"/>
              <button onClick={()=>{
                  console.log(document.getElementById('ids').value)
              }}>
                see
              </button> */}

              <div className="form-group">

                

                <label></label>
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <div className="choose-file-box">
                    <span className="for-border">

                      {/* <input type="file" name="media"/> */}
                      <h2>Choose File</h2>
                    </span>
                  </div>

                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </div>
              </div>

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
