import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: ${({ width }) => width || '200px'};
  height: 48px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  display: flex; /* Adicionado para alinhar ícone e texto */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 15px; /* Espaço entre o ícone e o texto */

  &:disabled {
    opacity: 0.5;
  }
`;