import styled from 'styled-components'

export const EditNaverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 37rem;
  height: 24.4rem;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-self: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;

`

export const Text = styled.h1`
  font-size: 1.5rem;
  margin-left: 1.4rem;
`

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: wrap;
  max-height: 18rem;

  input {
    width: 17.5rem;
    height: 2.5rem;
    padding: 0 0.4rem;
  }  

  label {
    margin-top: 2rem;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
`

export const SaveButton = styled.button`
  margin-top: 2rem;
  height: 2.5rem;
  width: 11rem;

  background: #212121;
  color: #FFF;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333
  }
`