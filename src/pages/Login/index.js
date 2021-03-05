import { Link } from 'react-router-dom'
import { LoginContainer, ContentSection, Logo, Button, Email, Password } from './styles'

import logo from '../../img/logo.png'

export default function Login() {
  return (
    <LoginContainer>
      <ContentSection>
      
        <Logo src={logo} alt=""/>

        <Email>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" placeholder="E-mail"/>
        </Email>

        <Password>
          <label htmlFor="senha">Senha</label>
          <input type="text" name="senha" placeholder="Senha"/>
        </Password>

        <Link to='/home'>
          <Button type="submit">Entrar</Button>
        </Link>
      </ContentSection>
    </LoginContainer>
  )
}