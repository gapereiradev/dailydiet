import { Container, List, MealText, TitleDate } from './styles';
import { SectionList, View, Text } from 'react-native';

type Meals = {
  date: string,
  data: [
    name: string,
    description: string,
    isDiet: boolean
  ]
}

export function Meal() { 
  //#region teste
  const DATA = [
    {
      date: "04.09.2023",
      data:[{name: "X-tudo", description: "Pizza Desc", isDiet: true},{name: "Whey protein com leite", description: "Pizza Desc", isDiet: true},{name: "Salada cesar com frango", description: "Pizza Desc", isDiet: true}, {name: "Vitamina de banana com leite", description: "Pizza Desc", isDiet: true}]
    },
    {
      date: "03.09.2023",
      data:[{name: "X-tudo", description: "Pizza Desc", isDiet: true},{name: "Whey protein com leite", description: "Pizza Desc", isDiet: true},{name: "Salada cesar com frango", description: "Pizza Desc", isDiet: true}, {name: "Vitamina de banana com leite", description: "Pizza Desc", isDiet: true}]
    },
    {
      date: "02.09.2023",
      data:[{name: "X-tudo", description: "Pizza Desc", isDiet: true},{name: "Whey protein com leite", description: "Pizza Desc", isDiet: true},{name: "Salada cesar com frango", description: "Pizza Desc", isDiet: true}, {name: "Vitamina de banana com leite", description: "Pizza Desc", isDiet: true}]
    },
    {
      date: "01.09.2023",
      data:[{name: "X-tudo", description: "Pizza Desc", isDiet: true},{name: "Whey protein com leite", description: "Pizza Desc", isDiet: true},{name: "Salada cesar com frango", description: "Pizza Desc", isDiet: true}, {name: "Vitamina de banana com leite", description: "Pizza Desc", isDiet: true}]
    },
  ]; 
  //#endregion
  return(
    <Container>
      
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({item}) => (
            <List>
              <MealText>
                {item.name}
              </MealText>
            </List>
      )}
      renderSectionHeader={({section: {date}}) => (
          <TitleDate>{date}</TitleDate>
      )}
    />
       
    </Container>


  );
}
