import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'
import Navbar from '../../components/Navbar'
import FeedbackModal from '../../components/FeedbackModal'
import arrowLeft from '../../img/arrowLeft.png'

import { 
  AddNaverContainer, 
  FormContainer, 
  TextContainer, 
  Text, 
  InputContainer, 
  SaveButton } from './styles'

export default function AddNaver() {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJob_role] = useState('')
  const [admission_date, setAdmission_date] = useState('')
  const [url, setUrl] = useState([])
  const [modalFeedback, setModalFeedback] = useState(false)

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
      setModalFeedback(true)

      setTimeout(() => {
        setModalFeedback(false)
        history.push('/home')
      }, 1000)
      
      } catch (err) {
        alert("Erro ao cadastrar naver. Tente novamente.")
      }
}
  
  return (
      <AddNaverContainer>
        <Navbar />
        <FormContainer onSubmit={handleSubmit}>

        <TextContainer>
          <Link to='/home'>
            <img src={arrowLeft} alt=""/>
          </Link>

          <Text>Adicionar Naver</Text>
        </TextContainer>

        <InputContainer>
          <label htmlFor="name">Nome</label>
          <input 
          required
          type="text" 
          name="name" 
          placeholder="Nome" 
          value={name} 
          onChange={e => setName(e.target.value)}
          />
          
          <label htmlFor="idade">Idade</label>
          <input 
          required
          type="date" 
          name="idade" 
          placeholder="Idade"
          value={birthdate} 
          onChange={e => setBirthdate(e.target.value)}
          />
          
          <label htmlFor="p">Projetos que participou</label>
          <input 
          required
          type="text" 
          name="p" 
          placeholder="Projetos que participou"
          value={project} 
          onChange={e => setProject(e.target.value)}
          />
          
          <label htmlFor="cargo">Cargo</label>
          <input 
          required
          type="text" 
          name="cargo" 
          placeholder="Cargo"
          value={job_role} 
          onChange={e => setJob_role(e.target.value)}
          />
          
          <label htmlFor="tempo">Tempo de empresa</label>
          <input 
          required
          type="date" 
          name="tempo de empresa" 
          placeholder="Tempo de empresa"
          value={admission_date} 
          onChange={e => setAdmission_date(e.target.value)}
          />
          
          <label htmlFor="url">URL da foto Naver</label>
          <input 
          required
          type="text" 
          name="url" 
          placeholder="URL da foto Naver"
          value={url} 
          onChange={e => setUrl(e.target.value)}
          />
        </InputContainer>

        <SaveButton>Salvar</SaveButton>

        <FeedbackModal 
        isOpen={modalFeedback} 
        onClickClose={() => setModalFeedback(false)}
        text='criado'
        />
      </FormContainer>
    </AddNaverContainer>
  )
}