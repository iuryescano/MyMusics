import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK}; 
    
    border: none;
    font-size: 16px;
    display: flex; /* Adicionado para alinhar ícone e texto */
    align-items: center; /* Centraliza verticalmente */
    gap: 15px; /* Espaço entre o ícone e o texto */
    height: 48px;
`;