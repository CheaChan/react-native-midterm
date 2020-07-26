// In App.js in a new project

import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import StudentListScreen from './Screen/StudentListScreen';
import StudentDetailsScreen from './Screen/StudentDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentList">
        <Stack.Screen 
          name="StudentList" 
          component={StudentListScreen} 
          options={{ 
            title: 'STUDENT LIST',
            headerStyle: {
              backgroundColor: '#669999',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="StudentDetails" 
          component={StudentDetailsScreen} 
          options={{ 
            title: 'STUDENT DETAILS',
            headerStyle: {
              backgroundColor: '#669999',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;