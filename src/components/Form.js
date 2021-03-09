import { Link } from 'react-router-dom'
import { FormContainer, TextContainer, Text, InputContainer, SaveButton } from './FormStyle'
import arrowLeft from '../img/arrowLeft.png'
import { useState } from 'react'


export default function Form(props) {
  const [name, setName] = useState([])
  const [age, setAge] = useState([])
  const [projects, setProjects] = useState([])
  const [jobTitle, setJobTitle] = useState([])
  const [workingTime, setWorkingTime] = useState([])
  const [url, setUrl] = useState([])


  function click() {
    console.log({
      name,
      age,
      projects,
      jobTitle,
      workingTime
    })
  }

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
        <input 
        type="text" 
        name="name" 
        placeholder="Nome" 
        value={name} 
        onChange={e => setName(e.target.value)}
        />
        
        <label htmlFor="idade">Idade</label>
        <input 
        type="text" 
        name="idade" 
        placeholder="Idade"
        value={age} 
        onChange={e => setAge(e.target.value)}
        />
        
        <label htmlFor="p">Projetos que participou</label>
        <input 
        type="text" 
        name="p" 
        placeholder="Projetos que participou"
        value={projects} 
        onChange={e => setProjects(e.target.value)}
        />
        
        <label htmlFor="cargo">Cargo</label>
        <input 
        type="text" 
        name="cargo" 
        placeholder="Cargo"
        value={jobTitle} 
        onChange={e => setJobTitle(e.target.value)}
        />
        
        <label htmlFor="tempo">Tempo de empresa</label>
        <input 
        type="text" 
        name="cargo" 
        placeholder="Tempo de empresa"
        value={workingTime} 
        onChange={e => setWorkingTime(e.target.value)}
        />
        
        <label htmlFor="url">URL da foto Naver</label>
        <input 
        type="text" 
        name="url" 
        placeholder="URL da foto Naver"
        value={url} 
        onChange={e => setUrl(e.target.value)}
        />
      </InputContainer>

      <SaveButton onClick={click}>Salvar</SaveButton>

    </FormContainer>
  )
}