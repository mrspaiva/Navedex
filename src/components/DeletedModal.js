import closeIcon from '../img/close.png'
import { DeletedOverlay, DeletedContainer, DeletedText, DeletedCloseButton } from './DeletedModalStyle'

export default function DeletedModal({ isOpen, onClickClose }) {
  if(!isOpen) {
    return null;
  }

  return (
    <DeletedOverlay>
      <DeletedContainer>
        <DeletedText>
          <strong>Naver excluído</strong>
          <div>Naver excluído com sucesso!</div>
        </DeletedText>

        <DeletedCloseButton>
          <img onClick={onClickClose} src={closeIcon} alt=""/>
        </DeletedCloseButton>
      </DeletedContainer>
    </DeletedOverlay>
  )
}