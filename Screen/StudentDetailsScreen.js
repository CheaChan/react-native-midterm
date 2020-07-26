import React from 'react';
import { View, Text } from 'react-native';
export default function StudentDetailsScreen({ route, navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Student Name: {route.params.stuName}</Text>
        <Text>Phone Number: {route.params.stuPhone}</Text>
        <Text>Student Age: {route.params.stuAge}</Text>
        <Text>Student Class: {route.params.stuClass}</Text>
        <Text>Student Province: {route.params.stuProvince}</Text>
      </View>
    );
  }