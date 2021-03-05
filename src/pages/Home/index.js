import { HomeContainer } from './styles'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />  
      <Card />
    </HomeContainer>
  )
}