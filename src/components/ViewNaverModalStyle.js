import styled from 'styled-components'

export const ViewOverlay = styled.div`
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
export const CloseButton = styled.button`
  width: 1rem;
  height: 1rem;

  background: #fff;
  border: 0;
  margin-left: 14rem;
  margin-top: 1.4rem;
  cursor: pointer;

  img {
    height: 0.9rem;
    width: 0.9rem;
  }
`