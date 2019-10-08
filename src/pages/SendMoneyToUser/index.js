import React, {useState, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { Transition } from 'react-navigation-fluid-transitions';

import api from '~/services/api';
import ModalToSendMoney from '~/components/ModalToSendMoney';

import { 
  Container, 
  Fr, 
  WrapperUser, 
  UserInfo, 
  UserMoney, 
  UserPhone, 
  UserImage, 
  UserEmail, 
  Content,
  TransferHeroTitle,
  TransferList,
  TransferValue,
  TransferDate,
  WrapperTransfers,
  SendMoneyButton,
  SendMoneyButtonLabel
} from './styles';
import AppHeader from '~/components/AppHeader';

export default function SendMoneyToUser({ navigation }){
  const [ transfers, setTransfers ] = useState([]);
  const [ totalValue, setTotalValue ] = useState(0);
  const [ showModal, setShowModal ] = useState(false);

  const [ modalValue, setModalValue ] = useState('');

  useEffect(()=> {
    async function loadItems(){
      const response = await api.get('/GetTransfers', {
        headers: token
      });             
      setTransfers(response.data); 
    }  loadItems();
  }, []);

  useEffect(()=> {
    function loadTotalValues(){
      const values = transfers.map((transfer) => parseFloat(transfer.value));    
      const total = values.reduce(function(total, value){
      return total + value;
      }, 0);
      setTotalValue(total.toFixed(2).replace('.', ',')); 
    } loadTotalValues();
  });

  function ModalToggle(){
    setShowModal(!showModal);    
  }

  async function sendMoney(){    

    const data = new ValueData();
      data.append('value', modalValue);
      data.append('token', token);
      data.append('ClientId', clientId);

    await api.post('/sendMoney', data, {
      headers: token
    });
    
    navigation.navigate('Main');
  }

  const { item } = navigation.state.params;
  return(
    <>
   <LinearGradient colors={[ '#07242b' , '#0a333d' , '#0e4452' ]} style={{
    flex: 1,        
    justifyContent: 'center',
    alignItems: 'center'
  }}>      
  <ModalToSendMoney
   toggleModal={()=> ModalToggle()} 
   visible={showModal}
   sendMoneyAction={()=> sendMoney()}
   inputValue={modalValue}
   changeHandler={value => setModalValue(value)}
  />
    <Container>
      <Transition appear="bottom">
        <Fr>
        <AppHeader 
            titleAlign={20}
            pageTitle={item.name}
            onPress={()=> navigation.goBack()}
            iconName="keyboard-arrow-down"
          />
        <WrapperUser>
          <>
            <UserImage 
              source={item.photo ? { uri: item.photo } : require('~/assets/images/naPhoto.jpg') }
            />
          </>
          <>
            <UserInfo>
              <UserMoney>{`R$ ${totalValue}`}</UserMoney>
              <UserEmail>{item.email}</UserEmail>
              <UserPhone>{item.phone}</UserPhone>
            </UserInfo>
          </>
        </WrapperUser>
        <Content>
          <TransferHeroTitle>Histórico de Transferências: </TransferHeroTitle>
          <TransferList>        
            {
              transfers.map((transfer)=> ( 
                <WrapperTransfers key={transfer._id}>                              
                  <TransferDate>{transfer.date}</TransferDate>
                  <TransferValue>R$ {parseFloat(transfer.value).toFixed(2).replace(".", ",")}</TransferValue>                                                               
                </WrapperTransfers>
              ))
            }          
          </TransferList>

          <SendMoneyButton onPress={()=> ModalToggle()}>
            <SendMoneyButtonLabel>
              Enviar Dinheiro
            </SendMoneyButtonLabel>
          </SendMoneyButton>
        </Content>
        </Fr>
      </Transition>      
    </Container>
  </LinearGradient>
 </>
  )
 
}
