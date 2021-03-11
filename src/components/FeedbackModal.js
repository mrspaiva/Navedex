import closeIcon from '../img/close.png'
import { 
  DeletedOverlay, 
  DeletedContainer, 
  DeletedText, 
  DeletedCloseButton } from './FeedbackModalStyle'

export default function FeedbackModal({ isOpen, onClickClose, text }) {
  if(!isOpen) {
    return null;
  }

  return (
    <DeletedOverlay>
      <DeletedContainer>
        <DeletedText>
          <strong>Naver {text}</strong>
          <div>Naver {text} com sucesso!</div>
        </DeletedText>

        <DeletedCloseButton>
          <img onClick={onClickClose} src={closeIcon} alt=""/>
        </DeletedCloseButton>
      </DeletedContainer>
    </DeletedOverlay>
  )
}