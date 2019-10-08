import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const WrapperContacts = styled.ScrollView`
  width: ${Dimensions.get('window').width};
  height: auto;
  padding: 0px 10px;
  margin: 5px 0px;    
`;

export const Fr = styled.View``;