import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Transition } from 'react-navigation-fluid-transitions';

import api from '~/services/api';


import { Container, WrapperContacts, Fr } from './styles';
import AppHeader from '~/components/AppHeader';
import ContactRow from '~/components/ContactRow';

export default function SendMoneyPage({ navigation }) {
  const [contacts, setContacts] = useState([]); 

  useEffect(()=> {
    async function loadItems(){      
      const response = await api.get('/GenerateToken', {
        headers: token
      });
      setContacts(response.data);    
    } loadItems();
}, []);

  return (
   <>
     <LinearGradient colors={[ '#07242b' , '#0a333d' , '#0e4452' ]} style={{
          flex: 1,        
          justifyContent: 'center',
          alignItems: 'center'
        }}>          
          <Container>              
          <Transition appear='right'>
            <Fr>
              <AppHeader 
                onPress={()=> navigation.goBack()}
                pageTitle="Enviar Dinheiro"
                titleAlign={20}
                iconName="keyboard-arrow-left"
              />
              <WrapperContacts> 
                { contacts.map((item) => (
                  <ContactRow 
                    key={item._id}
                    photoURL={ item.photo ? { uri: item.photo } : require('~/assets/images/naPhoto.jpg') }
                    email={item.email}
                    name={item.name}
                    phone={item.phone}
                    onPress={() => navigation.navigate('SendMoneyToUser', { item: item } )}
                  />
                ))}
              </WrapperContacts>  
            </Fr>      
          </Transition>
          </Container>
      </LinearGradient>
   </>
  )
}