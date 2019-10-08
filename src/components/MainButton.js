import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Transition } from 'react-navigation-fluid-transitions'


const MainButton = ({ onPress, label, iconName }) => (
  <TouchableOpacity onPress={onPress} style={styles.holder} >
    <Transition appear="flip">
      <View style={styles.wrapperLabel}>      
        <Icon name={iconName} size={30} color="#fff"/>
        <Text style={styles.label}>{label}</Text>      
      </View>
    </Transition>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  holder: {
    width: '50%',
    height: 170,
    backgroundColor: '#07242b',
    borderWidth: 1,    
    borderColor: '#07242b',
    opacity: 0.8,
    borderRadius: 10,
    marginHorizontal: 5,      
  },
  wrapperLabel: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  label: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-start',   
    fontWeight: 'bold' 
  }
});

export default MainButton;