import closeIcon from '../img/close.png'
import { ViewOverlay, ViewContainer, InfoContent, CloseButton } from './ViewNaverModalStyle'

export default function ViewNaverModal ({ isOpen, onClickClose, children }) {
  if(!isOpen) {
    return null
  }

  return (
    <ViewOverlay>
      <ViewContainer>
      <InfoContent>
          {children}  
          
        <CloseButton onClick={onClickClose}>
          <img src={closeIcon} alt=""/>
        </CloseButton>

      </InfoContent>
      </ViewContainer>
    </ViewOverlay>
  )
}