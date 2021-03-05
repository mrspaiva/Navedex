import { Link } from 'react-router-dom'
import { HomeContainer, ContentSection, Title, AddButton, CardContainer } from './styles'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar /> 

      <ContentSection>
        <Title>Navers</Title> 
        <Link to='/addnaver'>
          <AddButton>Adicionar Naver</AddButton>
        </Link>
      </ContentSection>

      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </HomeContainer>
  )
}