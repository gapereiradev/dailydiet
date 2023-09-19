import { View, } from 'react-native';
import theme from './src/theme';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Main } from '@screens/Main';
import { ThemeProvider } from 'styled-components';
import { MealForm } from '@screens/MealForm';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold});
  
  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <MealForm /> : <View style={{backgroundColor: "#000"}} />
      }
      
    </ThemeProvider>
  );
}
