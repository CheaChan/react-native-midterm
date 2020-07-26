import React from 'react';
import { View, Text } from 'react-native';
export default function StudentDetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello</Text>
        {/* <Text>{navigation.getParam('stuName')}</Text>
        <Text>{navigation.getParam('stuPhone')}</Text>
        <Text>{navigation.getParam('stuAge')}</Text>
        <Text>{navigation.getParam('stuClass')}</Text>
        <Text>{navigation.getParam('stuProvince')}</Text> */}
      </View>
    );
  }