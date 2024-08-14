import styled from "styled-components";

export const Container = styled.a`
    display: block;
    margin: 56px 0 28px;
    width: 1121px;
    height: 222.85px;
    background-color: rgba(255, 133, 155, 0.05);
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 16px;
    padding: 20px 30px;
    text-decoration: none;

    h3 {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 10px;
    }



        
        p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 5px;
    }
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.PINK_DARK};
    }
`;