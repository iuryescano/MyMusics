import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto; 
    grid-template-areas: 
        "header" 
        "content";

    .marcadores {
        background-color: black;
        border-radius: 8px;
        display: flex;
        padding: 20px 20px;
        
    }

    .tags {
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;
        gap: 15px;
    }
    main {
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        padding: 2px;
    }
    &::-webkit-scrollbar-track {
        background: none;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }
    }
`;

export const Form = styled.form`
    max-width: 50%;
    margin: 10px auto;

    >header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 25px;
    }
    .button {
        display: flex;
        justify-content: space-between;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
`;

export const Box2 = styled.div`
    display: flex;
`;