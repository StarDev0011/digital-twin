import { ButtonContainer } from './styles'

const ConnectButton = (props) => {
  return (
    <>
    {
      props.isConnected ?
      <ButtonContainer type="button" onClick={props.disconnect}>
      Disconnect
      </ButtonContainer>
      :
      <ButtonContainer type="button" onClick={props.connect}>
      Connect Wallet
      </ButtonContainer>
    }
    </>
    
  )
}

export default ConnectButton
