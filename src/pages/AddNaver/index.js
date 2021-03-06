import { AddNaverContainer } from './styles'
import Navbar from '../../components/Navbar'
import Form from '../../components/Form'

export default function AddNaver() {
  return (
    <AddNaverContainer>
      <Navbar />
      
        <Form text="Adicionar"/>
    </AddNaverContainer>
  )
}