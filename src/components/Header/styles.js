import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 

    display: flex;
    justify-content: space-between;

    padding: 0 60px;
    gap: 10px;

    > .text {
        color: ${({ theme }) => theme.COLORS.PINK}; 
        display: flex;
        width: 20%;
        justify-content: center;
        align-items: center;
    }

    .Input {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 55%;
    }

    .Search { 
        width: 100%;
        height: 50px;
        padding: 16px 24px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 
        color: ${({ theme }) => theme.COLORS.WHITE};  
        border: none;
    }

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 5px;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;

        a {
            font: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            display: flex;
            justify-content: end;
            margin-left: 3rem;
        }

        
        strong {
            font: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    

`;