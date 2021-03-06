import { EditNaverContainer } from './styles'
import Navbar from '../../components/Navbar'
import Form from '../../components/Form'

export default function EditNaver() {
  return (
    <EditNaverContainer>
      <Navbar />

      <Form text="Editar"/>
    </EditNaverContainer>
  )
}