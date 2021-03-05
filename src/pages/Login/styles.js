import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

export const ContentSection = styled.section`
  width: 28rem;
  height: 25.5rem;
  border: 1px solid #212121;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  margin: 2.5rem 0;
`

export const Email = styled.div`
  label {
    display: flex;
    width: 24rem;
    margin-bottom: 0.4rem;
  }

  input {
    width: 24rem;
    height: 2.5rem;
    padding: 0 0.4rem;
    color: #9E9E9E;
  }
`

export const Password = styled.div`
  label {
    display: flex;
    width: 24rem;
    margin-bottom: 0.4rem;
    margin-top: 2rem;
  }

  input {
    width: 24rem;
    height: 2.5rem;
    padding: 0 0.4rem;
    color: #9E9E9E;
  }
`

export const Button = styled.button`
  width: 24rem;
  height: 2.5rem;
  background: #212121;
  color: #FFF;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  border: 0;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
`