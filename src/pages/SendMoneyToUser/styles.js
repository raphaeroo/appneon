import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Fr = styled.View``;

export const WrapperUser = styled.View`
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 10px 25px;
  align-items: center;
`;

export const UserImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  borderWidth: 2px;
  borderColor: #69b1c7; 
`;

export const UserInfo = styled.View`
  flex-direction: column;
  padding: 0px 0px 0px 25px;
`;

export const UserPhone = styled.Text`
  color: white;
  font-size: 18px;
`;
export const UserMoney = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
export const UserEmail = styled.Text`
  color: white;
  font-size: 20px;
  marginVertical: 5px;
`;

export const Content = styled.View`
  margin-top: 20px;
  padding: 0px 25px;
  justify-content: space-around;
`;

export const TransferHeroTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const TransferList = styled.ScrollView`
  margin-top: 15px;
  width: 100%;
  height: ${Dimensions.get('window').height * .55};  
  overflow: hidden;
  margin-bottom: 25px;
`;

export const WrapperTransfers = styled.View`
  flex-direction: row;
  borderBottomWidth: 0.7px;
  borderBottomColor: #ccc;
  paddingBottom: 5px;
  justify-content: space-between;
  margin-top: 15px;
`;

export const TransferValue = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 25px;
`;

export const TransferDate = styled.Text`
  color: #ccc;
  font-size: 16px;
`;

export const SendMoneyButton = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  border-radius: 15px;
  background-color: #69b1c7;
  justify-content: center;
`;

export const SendMoneyButtonLabel = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;
