import styled from "styled-components";


export const ListContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  border-bottom: 1px solid #000000;

  h1{
    margin: 30px 0;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #6054ba;
  }
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  position: relative;

  .contactBtn{
    background-color: #6054ba;
    color: #fff;
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 8px;
    position: absolute;
    right: 0;
    top: 0px;
    transform: translateY(100%);
    cursor: pointer;
  }
`;