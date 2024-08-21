import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  margin-bottom: 8px;
  border-radius: 10px;

  height: ${({ height }) => height || '56px'}; /* Define a altura dinamicamente */

  > input, > textarea {
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    resize: none; /* Evita que o usuário redimensione a textarea (só afeta textarea) */
    height: 100%; /* Garante que o input/textarea preencha a altura definida no container */
    line-height: 1.5; /* Ajusta o espaçamento entre as linhas */

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: left; /* Alinha o placeholder à esquerda */
    }
  }

  > svg {
    margin-left: 16px;
  }
`;