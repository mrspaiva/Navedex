import { Link } from 'react-router-dom'
import { FormContainer, TextContainer, Text } from './FormStyle'
import arrowLeft from '../img/arrowLeft.png'


export default function Form() {
  return (
    <FormContainer>

      <TextContainer>
        <Link to='/home'>
          <img src={arrowLeft} alt=""/>
        </Link>

        <Text>Adicionar Naver</Text>
      </TextContainer>


    </FormContainer>
  )
}