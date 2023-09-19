import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};


  min-height: 56px;
  max-height: 56px;


  border-radius: 5px;
  
  
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 20px;
  
`;

export const IconButton = styled.Text``;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
`; 