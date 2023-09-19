import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const TitleDate = styled.Text`
  margin-left: 25px;
  ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;

    `};
`; 

export const List = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    
    ${({theme}) => css`
          color: ${theme.COLORS.GRAY_2};
          font-family: ${theme.FONT_FAMILY.REGULAR};
          font-size: ${theme.FONT_SIZE.TITLE.SM}px;
      `};
    
    border: 1px;
    border-radius: 5px;
    border-color: ${({theme})=> theme.COLORS.GRAY_5};

    min-height: 56px;
    max-height: 56px;

    margin-top: 5px;
    margin-bottom: 25px;
    margin-left: 20px;
    margin-right: 20px;
`; 


export const MealText = styled.Text`

`;