import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
       
`;

export const ButtonForm = styled.TouchableOpacity`
        
    `;

export const ButtonFormText = styled.Text`
    font-size: 20px;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;