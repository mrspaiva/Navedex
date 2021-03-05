import { Link } from 'react-router-dom'
import { AddNaverContainer, MainSection, AddTitle } from './styles'
import Navbar from '../../components/Navbar'
import arrowLeft from '../../img/arrowLeft.png'

export default function AddNaver() {
  return (
    <AddNaverContainer>
      <Navbar />

      <MainSection>
        <Link to='/home'>
          <img src={arrowLeft} alt=""/>
        </Link>

        <AddTitle>Adicionar Naver</AddTitle>
      </MainSection>
    </AddNaverContainer>
  )
}