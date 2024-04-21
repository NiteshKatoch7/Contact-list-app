import styled from "styled-components";


export const FormWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  &:last-child{
    border: 0;
    justify-content: flex-end;
    padding: 10px 0;
    position: sticky;
    bottom: 0;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  .form-container{
    padding: 10px 20px;

    &.w-33{
      width: 33%;
    }

    &.w-50{
      width: 50%;
    }

    &.w-100{
      width: 100%;
    }

    &.title{
      margin: 15px 0 6px;
      font-size: 22px;
      font-weight: 600;
      color: #6054ba;
      border-bottom: 0.3px solid #6054ba;
    }

    &.submit-btns{
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0 14px;

      button{
        font-size: 18px;
        font-weight: 500;
        padding: 6px 14px;
        min-width: 100px;
        border-radius: 4px;
        background: #6054ba;
        color: #fff;
        cursor: pointer;

        &.next-btn{
          background: lightgrey;
          color: #000;
        }
      }
    }

    .form-row{
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      label{
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 4px;
      }

      input{
        border: 1px solid lightgrey;
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
        width: 100%;
      }

      .error-message{
        color: red;
        font-size: 14px;
        font-weight: 300;
        position: absolute;
        top: 2.5%;
        right: 0;
      }
    }
  }
`;