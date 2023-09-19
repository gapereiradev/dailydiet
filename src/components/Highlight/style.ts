import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    text-align: center;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;

    `};
`;

export const Subtitle = styled.Text`
    text-align: center;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_2}; 
        font-family: ${theme}
    `};
`;