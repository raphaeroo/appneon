import React, {useState, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { Transition } from 'react-navigation-fluid-transitions';

import api from '~/services/api';

import { 
  Container, 
  Fr, 
  Content,
  TransferHeroTitle,
  TransferList,
  TransferValue,
  TransferDate,
  WrapperTransfers,
} from './styles';
import AppHeader from '~/components/AppHeader';

export default function HistoryMoneyPage({ navigation }){
  const [ transfers, setTransfers ] = useState([]);


  useEffect(()=> {
    async function loadItems(){
      const response = await api.get('/GetTransfer');             
      setTransfers(response.data); 
    }  loadItems();
  }, []);


  return(
    <>
   <LinearGradient colors={[ '#07242b' , '#0a333d' , '#0e4452' ]} style={{
    flex: 1,        
    justifyContent: 'center',
    alignItems: 'center'
  }}>      
    <Container>
      <Transition appear="right">
        <Fr>
        <AppHeader 
            titleAlign={2}
            pageTitle="Histórico de Envios"
            onPress={()=> navigation.goBack()}
            iconName="keyboard-arrow-left"
          />        
        <Content>
          <TransferHeroTitle>Todas as Transferências: </TransferHeroTitle>
          <TransferList>        
            {
              transfers.map((transfer)=> ( 
                <WrapperTransfers key={transfer._id}>                              
                  <TransferDate>{transfer.date}</TransferDate>
                  <TransferDate>Nome</TransferDate>
                  <TransferValue>R$ {parseFloat(transfer.value).toFixed(2).replace(".", ",")}</TransferValue>               
                </WrapperTransfers>
              ))
            }          
          </TransferList>          
        </Content>
        </Fr>
      </Transition>
    </Container>
  </LinearGradient>
 </>
  )
 
}
