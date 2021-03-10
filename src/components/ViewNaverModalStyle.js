import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ViewContainer = styled.div`
  background: #fff;
  width: 62.9rem;
  height: 31.4rem;

  display: flex;
`

export const NaverImg = styled.img`
  width: 50%;
`

export const InfoNaver = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 2rem;

  font-family: 'Montserrat', sans-serif;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  p {
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: #212121;
  }

  span {
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: #212121;
  }
`

export const IconsNaver = styled.section`
  display: flex;
  margin-top: 8rem;

  img {
    margin-right: 1rem;
  }
`