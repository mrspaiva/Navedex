import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import moment from 'moment'
import { editNaver } from '../../services/serviceEdit'
import Navbar from '../../components/Navbar'
import FeedbackModal from '../../components/FeedbackModal'
import arrowLeft from '../../img/arrowLeft.png'

import { 
  EditNaverContainer, 
  FormContainer, 
  TextContainer, 
  Text, 
  InputContainer, 
  SaveButton } from './styles'

export default function EditNaver() {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [project, setProject] = useState('')
  const [job_role, setJob_role] = useState('')
  const [admission_date, setAdmission_date] = useState('')
  const [url, setUrl] = useState('')
  
  const [modalFeedback, setModalFeedback] = useState(false)

  const { id: naverId } = useParams()
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const user = await editNaver('GET', naverId);

        setName(user.name);
        setBirthdate(calcAge(user.birthdate));
        setProject(user.project);
        setJob_role(user.job_role);
        setAdmission_date(calcAge(user.admission_date));
        setUrl(user.url);
    }
    fetchData()
  }, [naverId])

  function calcAge(date) {
    const age = Math.floor(
      moment().diff(moment(date), 'years', true)
    )
    return `${age} anos`
  }

  function convertDate(age) {
    const year = String(moment().year().toFixed() - age);
    const fullData = moment(year).format(`DD/MM/YYYY`);
    return fullData;
  }

   function handleSubmit(e) {
      e.preventDefault();
      const admission = convertDate(admission_date);
      const age = convertDate(birthdate);
      editNaver('PUT', naverId, job_role, admission, age, name, project, url);
      setModalFeedback(true);

      setTimeout(() => {
        setModalFeedback(false)
        history.push('/home')
      }, 1000)
      return;
  }

  return (
    <EditNaverContainer>
      <Navbar />
      <FormContainer onSubmit={ handleSubmit }>

        <TextContainer>
          <Link to='/home'>
            <img src={arrowLeft} alt=""/>
          </Link>

          <Text>Editar Naver</Text>
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
          type="number" 
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
          onChange={e => setJob_role(e.target.value)}
          value={job_role} 
          />
          
          <label htmlFor="tempo">Tempo de empresa</label>
          <input 
          required
          type="number" 
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
        text='atualizado'
        />
      </FormContainer>

    </EditNaverContainer>
  )
}