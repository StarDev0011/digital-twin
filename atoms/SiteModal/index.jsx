import React from 'react'
import { SiteModalWrapper } from './styles'

export const SiteModal = (props) => {
  return (
    <SiteModalWrapper display={props.display}>
      <span className="close" onClick={props.hidePopup}>
        <img src="/images/m-close.png" />
      </span>
      <div className="modal-content">
        {props.data.type === 'success' ? <img src="/images/m-check.png" /> : ''}
        {props.data.type === 'error' ? (
          <img src="/images/Icon-cross.png" />
        ) : (
          ''
        )}
        <div className="pop-msg">
          <h4>{props.data.title}</h4>
          <p>{props.data.message}</p>
          <button type="button" class="home-redirect">
            Home
          </button>
        </div>
      </div>
    </SiteModalWrapper>
  )
}

export default SiteModal
