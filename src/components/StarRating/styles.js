import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StarList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StarItem = styled.li`
  color: ${({ selected, theme }) => (selected ? theme.COLORS.PINK : theme.COLORS.GRAY)};
  margin: 0 2px;

  svg {
    width: 24px;
    height: 24px;
  }
`;