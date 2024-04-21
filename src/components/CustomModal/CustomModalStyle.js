import styled from "styled-components";


export const ModalPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fading 0.4s ease-in-out;
`;

export const ModalPopup = styled.div`
  width: 70%;
  height: auto;
  max-height: 80vh;
  overflow: auto;
  background-color: #fff;
  border-radius: 12px;
  margin: auto;
  position: relative;

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-track{
    width: 12px;
    background-color: #fff;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb{
    padding: 0 3px;
    width: 8px;
    background-color: lightgrey;
    border-radius: 12px;
  }

  .modal-header{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    background: #fff;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 9;

    h3{
        color: #6054ba;
        font-weight: 900;
        font-size: 30px;
    }

    button{
      cursor: pointer;
    }
  }

  .modal-body{
  }
`;