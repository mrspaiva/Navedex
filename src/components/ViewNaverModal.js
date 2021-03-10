import closeIcon from '../img/close.png'
import { ViewOverlay, ViewContainer, CloseButton } from './ViewNaverModalStyle'

export default function ViewNaverModal ({ isOpen, onClickClose, children }) {
  if(!isOpen) {
    return null
  }

  return (
    <ViewOverlay>
      <ViewContainer>
        {children}  
        <CloseButton onClick={onClickClose}>
          <img  src={closeIcon} alt=""/>
        </CloseButton>
      </ViewContainer>
    </ViewOverlay>
  )
}