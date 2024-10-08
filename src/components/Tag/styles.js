import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.WHITE};  
    background-color: ${({ bgColor, theme }) => bgColor || theme.COLORS.GRAY_300};  
    font-family: 'Roboto', sans-serif;
`;