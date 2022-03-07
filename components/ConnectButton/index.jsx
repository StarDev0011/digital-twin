import {ButtonContainer} from './styles'

const ConnectButton = (props) => {
    return (
        <ButtonContainer type='button' onClick={props.handleWalletConected}>
            Connect Wallet
        </ButtonContainer>
    )
}

export default ConnectButton;