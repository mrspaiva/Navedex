import styled from "styled-components";

export const DeleteOverlay = styled.div`
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

export const DeleteContainer = styled.div`
  width: 37rem;
  height: 14.5rem;
  padding: 2rem;
  background: #fff;
  color: #212121;

  display: flex;
  flex-direction: column;
  
`

export const DeleteTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.7rem;
`

export const DeleteText = styled.span`
  font-weight: 400;
  margin-bottom: 2.4rem;
`

export const DeleteButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    width: 11rem;
    height: 2.5rem;

    border: 0;
    cursor: pointer;
  }

  .cancelButton{
    background: #fff;
    border: 1px solid #212121;
    color: #212121;
    margin-right: 1.5rem;
  }

  .deleteButton {
    background: #212121;
    color: #fff;
  }
`