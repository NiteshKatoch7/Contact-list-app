import styled from "styled-components";


export const ListWrapper = styled.ul`
    list-style: none;
    padding: 0;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    align-items: center;
    justify-content: center;
    margin: 40px 0 60px;

    li{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        flex: 0 0 40%;
        padding: 20px;
        border-radius: 12px;
        cursor: pointer;
        min-height: 160px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

        p{
            font-size: 20px;
            font-weight: 900;
            margin: 5px 0;
            color: #6054ba;

            &.user-name{
                font-weight: 400;
                font-size: 24px
            }
        }

        span{
            font-weight: 300;
        }

        .highlight-circles{
            position: absolute;
            top: 0;
            background-color: #6054ba;
            color: #fff;
            font-weight: 600;
            font-size: 20px;
            display: block;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;

            &.userId{
                left: 0;
                transform: translate3d(-50%, -50%, 0);
            }

            &.btn{
                width: 35px;
                height: 35px;
                font-size: 20px;
                background: #ffffff;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

                &.edit-btn{
                    right: 0;
                    transform: translate3d(50%, -50%, 0);
                    color: #6054ba;
                }
    
                &.delete-btn{
                    top: unset;
                    right: 0;
                    bottom: 0;
                    transform: translate3d(50%, 50%, 0);
                    color: #FF0000;
                }
            }
        }

    }
`;