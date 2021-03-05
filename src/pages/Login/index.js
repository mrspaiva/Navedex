import { LoginContainer, ContentSection, Button, Email, Password } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <ContentSection>
        <Email>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" placeholder="E-mail"/>
        </Email>

        <Password>
          <label htmlFor="senha">Senha</label>
          <input type="text" name="senha" placeholder="Senha"/>
        </Password>

        <Button type="submit">Entrar</Button>
      </ContentSection>
    </LoginContainer>
  )
}