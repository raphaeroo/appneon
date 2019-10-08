import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Fr = styled.View``;

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

