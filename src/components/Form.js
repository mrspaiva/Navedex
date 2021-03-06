import { Link } from 'react-router-dom'
import { FormContainer, TextContainer, Text, InputContainer, SaveButton } from './FormStyle'
import arrowLeft from '../img/arrowLeft.png'


export default function Form(props) {
  return (
    <FormContainer>

      <TextContainer>
        <Link to='/home'>
          <img src={arrowLeft} alt=""/>
        </Link>

        <Text>{props.text} Naver</Text>
      </TextContainer>

      <InputContainer>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" placeholder="Nome"/>
        
        <label htmlFor="idade">Idade</label>
        <input type="text" name="idade" placeholder="Idade"/>
        
        <label htmlFor="p">Projetos que participou</label>
        <input type="text" name="p" placeholder="Projetos que participou"/>
        
        <label htmlFor="cargo">Cargo</label>
        <input type="text" name="cargo" placeholder="Cargo"/>
        
        <label htmlFor="tempo">Tempo de empresa</label>
        <input type="text" name="cargo" placeholder="Tempo de empresa"/>
        
        <label htmlFor="url">URL da foto Naver</label>
        <input type="text" name="url" placeholder="URL da foto Naver"/>
      </InputContainer>

      <SaveButton>Salvar</SaveButton>

    </FormContainer>
  )
}