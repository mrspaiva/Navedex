import { CardContainer, IconsSection } from './CardStyle'
import deleteIcon from '../img/delete.png'
import updateIcon from '../img/update.png'

export default function Card({img, onClickCard, name, job, del, onClickEdit}) {
  return (
      <CardContainer>
        <img src={img} alt="" onClick={onClickCard}/>
        <strong>{name}</strong>
        <p>{job}</p>
        
        <IconsSection>
          <img onClick={del} className='deleteIcon' src={deleteIcon} alt=""/>

          <img onClick={onClickEdit} className='updateIcon' src={updateIcon} alt=""/>
        </IconsSection>
    </CardContainer>
  )
}