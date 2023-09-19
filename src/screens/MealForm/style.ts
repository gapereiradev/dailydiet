import styled, { css } from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_5};
    
    justify-content: center;
    align-items: center;
`;
