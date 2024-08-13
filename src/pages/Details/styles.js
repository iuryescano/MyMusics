import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80%;
        padding: 20px 20px;
    }
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 8px;
    padding: 2px;
    }

    &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    }

      /* Cor e estilo do polegar da barra de rolagem */
    &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;

    }
    

`;