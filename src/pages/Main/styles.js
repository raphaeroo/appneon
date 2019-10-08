import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;  
`;

export const WrapperImg = styled.View`
border-radius: 64px;
width: 128px;
height: 128px; 
`;

export const UserName = styled.Text`
  color: white; 
  margin: 10px 0px 5px 0px;
  font-size: 20px;
  font-weight: bold;
`;  

export const UserMail = styled.Text`
  color: white; 
  font-size: 16px;
`;

export const UserImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 130px;
  height: 130px;
  border-radius: 64px;
`;

export const WrapperButtonsFooter = styled.View`
  flex-direction: row;
  padding: 0px 15px;  
  justify-content: space-between;  
  margin-bottom: 20px;  
`;
