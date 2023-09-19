import { Button } from '@components/ButtonLarger';
import { Container, TitleNoBold, ViewFromText, styles } from './styles';

import { Header } from '@components/Header';
import { Statiscal } from '@components/StatisticalPercentage';
import { Meal } from '@components/Meal';

type Meals = {
  date: string,
  data: [
    name: string,
    description: string,
    isDiet: boolean
  ]
}

export function Main() { 
  //#region teste
  const DATA = [
    {
      date: "04/09/2023",
      data:[{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true}]
    },
    /*{
      date: "03/09/2023",
      data:[{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true}]
    },
    {
      date: "02/09/2023",
      data:[{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true}]
    },
    {
      date: "01/09/2023",
      data:[{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true},{name: "Pizza", description: "Pizza Desc", isDiet: true}]
    },*/
  ]; 
  //#endregion
  return(
<Container>
      <Header />
      <Statiscal />

      <ViewFromText>
        <TitleNoBold>
          Refeições
        </TitleNoBold>
      </ViewFromText>
      
      <Button title={"Nova Refeição"} />

      <Meal />


        
    </Container>


  );
}
