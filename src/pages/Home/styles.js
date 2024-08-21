import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header" 
        "content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    .topo {
        display: flex;
        justify-content: center;
        gap: 40rem;
        align-items: center;
        padding: 80px 40px; /* Ajuste conforme necessário */
        height: 40px; /* Altura fixa para .topo */
        width: 100%;
        font-size: 20px;

    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5px;
        overflow-y: hidden; /* Impede que o container geral tenha overflow */
    }
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    width: 60%; /* Garantir que ocupa a largura total */
    height: calc(100vh - 105px - 150px - 40px); /* Altura dinâmica subtraindo a altura de header e topo */

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
`;