import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


export const Container = styled.View`
  margin: 15px 5px 0px 5px;

  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 20px;

  border-radius: 10px;
`
