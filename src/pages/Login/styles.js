import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
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

export const Email = styled.div`
  margin-bottom: 3rem;

  label {
    display: flex;
    width: 24rem;
  }

  input {
    width: 24rem;
    height: 2.5rem;
  }
`

export const Password = styled.div`
  label {
    display: flex;
    width: 24rem;
  }

  input {
    width: 24rem;
    height: 2.5rem;
  }
`

export const Button = styled.button`
  width: 24rem;
  height: 2.5rem;
  background: #212121;
  color: #FFF;
  margin-top: 2rem;
`