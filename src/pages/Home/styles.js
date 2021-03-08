import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

export const ContentSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.2rem;
`

export const Title = styled.h1`
  margin-top: 4rem;
  margin-left: 2rem;
  font-size: 2.4rem;
`

export const AddButton = styled.button`
  margin-right: 2rem;
  width: 11rem;
  height: 2.5rem;

  background: #212121;
  border: 0;
  color: #FFF;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
  transition: background 0.2s;

  &:hover {
    background: #333
  }
`

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-right: 0;
  justify-items: center;
`