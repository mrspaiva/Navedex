import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import ViewNaverModal from '../../components/ViewNaverModal'
import DeleteNaverModal from '../../components/DeleteNaverModal'
import FeedbackModal from '../../components/FeedbackModal'
import deleteIcon from '../../img/delete.png'
import updateIcon from '../../img/update.png'

import { 
  HomeContainer, 
  ContentSection, 
  Title, 
  AddButton, 
  CardWrapper, 
  NaverImg, 
  InfoNaver, 
  IconsNaver
} from './styles'

export default function Home() {
  const [navers, setNavers] = useState([])
  const [viewNaver, setViewNaver] = useState(null)
  const [naverId, setNaverId] = useState(null)
  const [modalFeedback, setModalFeedback] = useState(false)

  const history = useHistory();
  const token = localStorage.getItem('@Navedex:Token')

  useEffect(() => {
    async function fetchData() {
      api.get('navers', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setNavers(response.data)
      })
    }
    fetchData()
  }, [token])

  async function handleDelete(id) {
    try {
      await api.delete(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setNavers(navers.filter(naver => naver.id !== id));
    } catch {
      alert("Erro ao deletar. Tente novamente.");
    }

    setNaverId(null)
    setModalFeedback(true)

    setTimeout(() => {
      setModalFeedback(false)
      history.push('/home')
    }, 1000)

    return <FeedbackModal />
  }

  function calcAge(date) {
    const age = Math.floor(
      moment().diff(moment(date), 'years', true)
    )
    return `${age} anos`
  }

  return (
    <HomeContainer>
      <Navbar /> 

      <ContentSection>
        <Title>Navers</Title> 
        <Link to='/addnaver'>
          <AddButton>Adicionar Naver</AddButton>
        </Link>
      </ContentSection>

      <CardWrapper>
        {navers.map(naver => (
            <Card 
            key={naver.id}
            img={naver.url}
            onClickCard={() => setViewNaver(naver)}
            name={naver.name}
            job={naver.job_role}
            del={() => setNaverId(naver.id)}
            onClickEdit={() => history.push(`editnaver/${naver.id}`)}
            />
            ))}
      </CardWrapper>

      <ViewNaverModal isOpen={Boolean(viewNaver)} onClickClose={() => setViewNaver(null)}>
        {viewNaver ? (
          <>
            <NaverImg src={viewNaver.url} alt=""/>

            <InfoNaver>
              <strong>{viewNaver.name}</strong>
              <span>{viewNaver.job_role}</span>

              <p>Idade</p>
              <span>{calcAge(viewNaver.birthdate)}</span>

              <p>Tempo de empresa</p>
              <span>{calcAge(viewNaver.admission_date)}</span>

              <p>Projetos que participou</p>
              <span>{viewNaver.project}</span>

              <IconsNaver>
                <img onClick={() => setNaverId(viewNaver.id)} src={deleteIcon} alt=''/>
                <img 
                src={updateIcon}
                onClick={() => history.push(`editnaver/${viewNaver.id}`)}
                alt='' 
                />
              </IconsNaver>
            </InfoNaver>
          </>
        ) : null}  
      </ViewNaverModal>

      <DeleteNaverModal 
      isOpen={Boolean(naverId)}
      onClickClose={() => setNaverId(null)}
      onClickDelete={() => handleDelete(naverId)}
      />

      <FeedbackModal 
      isOpen={modalFeedback} 
      onClickClose={() => setModalFeedback(false)}
      text='excluído'
      />
    </HomeContainer>
  )
}