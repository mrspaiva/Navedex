import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 17.5rem;
  height: 23.5rem;
  margin-bottom: 2rem;

  font-family: 'Montserrat', sans-serif;

  img {
    width: 17.5rem;
    height: 17.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
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
    outline: 0;
  }

  .deleteIcon {
    width: 0.9rem;
    height: 1.1rem;
    margin-left: 0.3rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .updateIcon {
    width: 1.1rem;
    height: 1.1rem;
  }
`