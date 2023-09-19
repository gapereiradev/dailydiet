import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ViewFromText =  styled.View`
  margin-top: 5px;
`;

export const TitleNoBold = styled.Text`
  text-align: left;
  margin-left: 25px;
  ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;

    `};
`; 