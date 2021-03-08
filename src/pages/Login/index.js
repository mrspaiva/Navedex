import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'
import logo from '../../img/logo.png'
  
import { 
  LoginContainer, 
  ContentSection, 
  Logo, 
  Button, 
  Email, 
  Password } from './styles'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const login = { email, password };

    if (!email) {
      setInputError('Todos os campos são obrigatórios.');
      return;
    }

    if (!password) {
      setInputError('Todos os campos são obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('users/login', login);

      localStorage.setItem('@Navedex:Token', response.data.token);

      history.push('/home');
    } catch (error) {
      setLoading(false);
      setInputError(alert('E-mail ou senha inválidos.'));
    }
  }
  return (
    <LoginContainer>
      <ContentSection onSubmit={handleLogin}>
      
        <Logo src={logo} alt=""/>

        <Email>
          <label htmlFor="email">E-mail</label>
          <input 
          type="text" 
          name="email" 
          placeholder="E-mail" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          />
        </Email>

        <Password>
          <label htmlFor="senha">Senha</label>
          <input 
          type="text" 
          name="senha" 
          placeholder="Senha" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          />
        </Password>


        {inputError && <span>{inputError}</span>}

        {loading ? (
            <Button type="submit" primary>Entrar</Button>
        ) : (
            <Button type="submit" primary>Entrar</Button>
        )}

        
      </ContentSection>
    </LoginContainer>
  )
}