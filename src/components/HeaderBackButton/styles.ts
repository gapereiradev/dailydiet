import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const FormLine = styled.View`
    flex-direction: row;
    margin-top: 25px;
`;

export const TitleFormText = styled.Text`
    font-size: 20px;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;


