import React from 'react';
import { Modal, TextInput, Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ModalToSendMoney = ({ toggleModal, visible, sendMoneyAction, changeHandler, inputValue }) => (  
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {}}>
              <TouchableWithoutFeedback style={styles.container} accessible={false} onPress={()=> Keyboard.dismiss()}>
                <LinearGradient colors={[ '#07242b' , '#0a333d' , '#0e4452' ]} style={{
                  flex: 1,        
                  justifyContent: 'center',
                  alignItems: 'center'
                }}> 
                  <KeyboardAvoidingView behavior='height' style={styles.content}>
                    <TouchableOpacity
                      style={styles.closeModal}
                      onPress={toggleModal}>
                      <Text style={{color: 'white', fontWeight: 'bold'}} >X</Text>
                    </TouchableOpacity>
                    <View styles={styles.wrapperHeader}>
                      <Text style={styles.titleModal}>
                        Quanto Deseja Enviar?
                      </Text>
                    </View>
                    <View styles={styles.wrapperHeader}>
                      <TextInput 
                        placeholder="R$ 00,00"
                        placeholderTextColor="#bbb"
                        onChangeText={changeHandler}
                        value={inputValue}
                        style={styles.input}
                        keyboardType="numeric"                      
                      />
                    </View>
                    <View styles={styles.wrapperHeader}>
                      <TouchableOpacity
                        style={styles.sendMoneyButton}
                        onPress={sendMoneyAction}
                      >
                        <Text style={styles.sendMoneyButtonLabel}>Enviar</Text>
                      </TouchableOpacity>
                    </View>
                  </KeyboardAvoidingView>
              </LinearGradient>
            </TouchableWithoutFeedback>
        </Modal>              
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',    
    justifyContent: 'center',
    backgroundColor: 'red'    
  },
  content: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    height: 'auto',
    borderRadius: 30,
    alignSelf: 'center'
  },
  wrapperHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  titleModal: {
    color: '#0a333d',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10
  },
  input: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#eee',
    alignSelf: 'center'
  },
  sendMoneyButton: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#0a333d',
    marginTop: 15,
    borderRadius: 20
  },
  sendMoneyButtonLabel: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20,
    alignSelf: 'center'
  }, 
  closeModal: {
    alignSelf: 'flex-end',
    backgroundColor: '#07242b',
    borderRadius: 40,
    width: 30,
    height: 30,
    position: 'absolute',
    top: -15,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default ModalToSendMoney;