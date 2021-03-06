import { Link } from 'react-router-dom'
import { CardContainer, IconsSection } from './CardStyle'
import deleteIcon from '../img/delete.png'
import updateIcon from '../img/update.png'

export default function Card() {
  return (
    <CardContainer>
      <img src="https://github.com/mrspaiva.png" alt=""/>
      <strong>Natalia Paiva</strong>
      <p>Front-end Developer</p>
      
      <IconsSection>
        <Link to="/">
          <img className='deleteIcon' src={deleteIcon} alt=""/>
        </Link>
        <Link to="/editnaver">
          <img className='updateIcon' src={updateIcon} alt=""/>
        </Link>
      </IconsSection>
    </CardContainer>
  )
}