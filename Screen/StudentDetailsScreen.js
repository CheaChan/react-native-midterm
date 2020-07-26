import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';
export default function StudentDetailsScreen({ route, navigation }) {
    return (
      <View style={ styles.container}>
        <Text style={styles.item}>Student Name: {route.params.stuName}</Text>
        <Text style={styles.item}>Phone Number: {route.params.stuPhone}</Text>
        <Text style={styles.item}>Student Age: {route.params.stuAge}</Text>
        <Text style={styles.item}>Student Class: {route.params.stuClass}</Text>
        <Text style={styles.item}>Student Province: {route.params.stuProvince}</Text>
        <Text style={styles.btn} title="Student List" onPress={() => navigation.goBack()}></Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Student List</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: 30,
      paddingStart:50,
      paddingEnd: 30,
      backgroundColor: '#d1e0e0',
      fontSize:18,
    },
    item: {
      fontSize:17,
    },
    appButtonContainer: {
      elevation: 2,
      backgroundColor: "#669999",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 17,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });