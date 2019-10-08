import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = ({onPress, pageTitle, titleAlign, iconName}) => (
  <View style={styles.wrapperHeader}>
    <View style={{flex: 2}}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={iconName} size={40} color="#fff" />
      </TouchableOpacity>
    </View>
    <View style={{flex: 7}}>
      <Text style={[styles.title, { paddingLeft: titleAlign }]}>{pageTitle}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  wrapperHeader: {
    marginTop: 10,    
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 15
  },
  title: {    
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export default AppHeader;