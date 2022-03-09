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
            <form action="" className="shipping-form">
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
              <div className="form-group">
                <label></label>
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <div className="choose-file-box">
                    <span className="for-border">
                      <h2>Choose File</h2>
                    </span>
                  </div>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </div>
              </div>
            </form>
          </div>

          <div className="right-bx">
            <div className="order-summary">
              <h2 className="title">Order Summary</h2>

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

export default DetailBox;
