import { Link, useHistory } from 'react-router-dom'
import { FormContainer, TextContainer, Text, InputContainer, SaveButton } from './FormStyle'
import arrowLeft from '../img/arrowLeft.png'
import { useState } from 'react'

import api from '../services/api'


export default function Form(props) {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJob_role] = useState('')
  const [admission_date, setAdmission_date] = useState('')
  const [url, setUrl] = useState([])

  const history = useHistory();
  const token = localStorage.getItem('@Navedex:Token')

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name,
      birthdate,
      project,
      job_role,
      admission_date,
      url
    }

    try {
      await api.post('navers', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      history.push("/home")
    } catch (err) {
      alert("Erro ao cadastrar caso. Tente novamente.")
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>

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
        value={birthdate} 
        onChange={e => setBirthdate(e.target.value)}
        />
        
        <label htmlFor="p">Projetos que participou</label>
        <input 
        type="text" 
        name="p" 
        placeholder="Projetos que participou"
        value={project} 
        onChange={e => setProject(e.target.value)}
        />
        
        <label htmlFor="cargo">Cargo</label>
        <input 
        type="text" 
        name="cargo" 
        placeholder="Cargo"
        value={job_role} 
        onChange={e => setJob_role(e.target.value)}
        />
        
        <label htmlFor="tempo">Tempo de empresa</label>
        <input 
        type="text" 
        name="cargo" 
        placeholder="Tempo de empresa"
        value={admission_date} 
        onChange={e => setAdmission_date(e.target.value)}
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

      <SaveButton>Salvar</SaveButton>

    </FormContainer>
  )
}