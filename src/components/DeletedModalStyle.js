import styled from "styled-components";

export const DeletedOverlay = styled.div`
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
export const DeletedContainer = styled.div`
  width: 37rem;
  height: 10rem;
  padding: 2rem;
  background: #fff;
  color: #212121;

  display: flex;
  justify-content: space-between;
`

export const DeletedText = styled.section`
  strong {
    font-size: 1.5rem;
  }

  div {
    margin-top: 1.5rem;
    font-weight: 400;
  }
`

export const DeletedCloseButton = styled.button`
  width: 1rem;
  height: 1rem;
  background: #fff;
  border: 0;
  cursor: pointer;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`