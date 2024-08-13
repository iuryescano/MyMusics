import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Star = styled.div`
  color: ${({ selected, theme }) => (selected ? theme.COLORS.PINK : theme.COLORS.GRAY)};
  transition: color 0.2s;

  svg {
    width: 24px;
    height: 24px;
  }
`;