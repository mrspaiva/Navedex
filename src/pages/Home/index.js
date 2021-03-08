import { Link } from 'react-router-dom'
import { HomeContainer, ContentSection, Title, AddButton, CardWrapper } from './styles'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Home() {
  const [navers, setNavers] = useState([])

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
            name={naver.name}
            job={naver.job_role}
            />
            ))}
      </CardWrapper>
    </HomeContainer>
  )
}