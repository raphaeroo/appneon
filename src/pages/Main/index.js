import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Container, WrapperImg, UserName, UserMail, WrapperButtonsFooter, UserImage } from './styles';
import MainButton from '~/components/MainButton';

export default function Main({ navigation }) {
  return (
    <>
      <LinearGradient colors={[ '#07242b' , '#0a333d' , '#0e4452' ]} style={{
          flex: 1,        
          justifyContent: 'center',
          alignItems: 'center'
        }}>
      <Container>
        <WrapperImg>
          <UserImage 
            source={require('~/assets/images/eu.jpg')}
          />
        </WrapperImg>
        <>
          <UserName>Raphael Freitas</UserName>
          <UserMail>raphael@email.com</UserMail>
        </>        
      </Container>
      <WrapperButtonsFooter>
          <MainButton 
            onPress={()=> navigation.navigate('SendMoneyPage')}
            label="Enviar Dinheiro"
            iconName="attach-money"
          />
          <MainButton 
            onPress={()=> navigation.navigate('HistoryMoneyPage')}
            label="Histórico de Envios"
            iconName="history"
          />
        </WrapperButtonsFooter>
    </LinearGradient>
    </>
  );
}
