import { Link } from 'react-router-dom'
import { FormContainer } from './FormStyle'
import arrowLeft from '../img/arrowLeft.png'


export default function Form() {
  return (
    <FormContainer>
      <Link to='/home'>
          <img src={arrowLeft} alt=""/>
        </Link>
    </FormContainer>
  )
}