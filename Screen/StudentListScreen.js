import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import StudentDetailsScreen from './StudentDetailsScreen';
export default function StudentListScreen({ navigation }) {
    const [stuInfos, setStuInfos] = useState([
        {stuId:'001',stuName:'Chea Chan',stuPhone:'0974664594', stuClass:'Programming B', stuProvince:'Kompong Thom', stuAge:25},
        {stuId:'002',stuName:'Chea Devit',stuPhone:'097483494', stuClass:'Programming A', stuProvince:'Kandal', stuAge:22},
        {stuId:'003',stuName:'Neam Sinat',stuPhone:'0974079859', stuClass:'Programming B', stuProvince:'Bong Teay Mean Chey', stuAge:20},
        {stuId:'004',stuName:'Nourng Nuon',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'005',stuName:'Rern Chantha',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'006',stuName:'Hour Panha',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'007',stuName:'Loem Dalin',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'008',stuName:'Sok Heng',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'009',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'010',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'011',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'012',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'013',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'014',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'015',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'016',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'017',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'018',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'019',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'020',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
        {stuId:'021',stuName:'Chea Chan',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19},
    ]);
    return (
      <View style={styles.container}>
        <FlatList
            data={stuInfos}
            renderItem={({ item }) =>(
                <TouchableOpacity onPress={() => navigation.navigate('StudentDetails', item)}>
                    <Text style={styles.item}>{item.stuId}: {item.stuName}( {item.stuClass} )</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.stuId}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:5
    },
    item: {
      backgroundColor: '#d1e0e0',
      paddingTop: 10,
      paddingBottom: 10,
      paddingStart:30,
      paddingEnd: 30,
      marginVertical: 5,
      fontSize:18,
    //   marginHorizontal: 160,
    }
  });