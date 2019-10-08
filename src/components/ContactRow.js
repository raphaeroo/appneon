import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactRow = ({ phone, name, photoURL, onPress }) => (
  <TouchableOpacity style={styles.wrapperContact} onPress={onPress} >
    <View>
      <Image style={styles.contactImage} source={photoURL} resizeMode="cover" />
    </View>
    <View style={styles.contactInfo}>
      <Text numberOfLines={2} style={styles.contactName} >{name}</Text>
      <Text style={styles.contactPhone}>{phone}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapperContact: {
    flexDirection: 'row',
    width: '100%',
    borderTopColor: '#69b1c7',
    borderTopWidth: 0.7,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 20,    
  }, 
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#69b1c7'
  },
  contactInfo: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  contactName: {
    fontWeight: 'bold',
    color: '#69b1c7',
    fontSize: 25
  },
  contactPhone: {
    fontSize: 20,
    color: '#4a7c8a'
  }
});

export default ContactRow;