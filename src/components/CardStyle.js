import styled from 'styled-components'

export const CardContainer = styled.div`
  margin-top: 8rem;
  margin-left: 30rem;

  width: 17.5rem;
  height: 23.5rem;

  font-family: 'Montserrat', sans-serif;

  img {
    height: 17.5rem;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 600;
  }

  p {
    font-weight: 400
  }
`

export const IconsSection = styled.section`
  .deleteIcon, .updateIcon {
    margin-top: 0.8rem;
  }

  .deleteIcon {
    width: 0.9rem;
    height: 1.1rem;
    margin-left: 0.3rem;
    margin-right: 1rem;
  }

  .updateIcon {
    width: 1.1rem;
    height: 1.1rem;
  }
`