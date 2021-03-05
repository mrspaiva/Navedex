import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  .exit {
    font-size: 0.9rem;
    margin: 1.8rem 2rem 1.4rem;
    text-decoration: none;
    color: #000;
  }

  .exit:hover {
    color: #9E9E9E
  }
`

export const Logo = styled.img`
  width: 9.1rem;
  height: 2.3rem;
  margin-top: 1.4rem;
  margin: 1.4rem 2rem;
`

