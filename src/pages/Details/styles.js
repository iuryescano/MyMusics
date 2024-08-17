import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 200px auto;
    grid-template-areas: 
        "header" 
        "content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
        border: 3px solid #3E3B47;
    };
    .timeIcon{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.PINK}; ;
    };

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20rem;
    overflow-y: auto;
    width: 95%; /* Garantir que ocupa a largura total */
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


export const Initial = styled.div`
    display: flex;
    margin: 0;
    gap: 12px;
    justify-items: center;
    align-items: center;
    p {
        font-size: 16px;
    }
    
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-family: 'Roboto Slab', sans-serif;
`

