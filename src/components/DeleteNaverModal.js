import { 
  DeleteOverlay, 
  DeleteContainer, 
  DeleteTitle, 
  DeleteText, 
  DeleteButtonSection } from './DeleteNaverModalStyle'

export default function DeleteNaverModal({ isOpen, onClickClose, onClickDelete }) {
  if(!isOpen) {
    return null
  }

  return (
    <DeleteOverlay>
      <DeleteContainer>
        <DeleteTitle>Excluir Naver</DeleteTitle>
        <DeleteText>Tem certeza que deseja excluir este Naver?</DeleteText>

        <DeleteButtonSection>
          <button className='cancelButton' onClick={onClickClose}>Cancelar</button>
          <button className='deleteButton' onClick={onClickDelete}>Excluir</button>
        </DeleteButtonSection>
      </DeleteContainer>
    </DeleteOverlay>
  )
}