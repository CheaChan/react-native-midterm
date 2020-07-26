import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import StudentDetailsScreen from './StudentDetailsScreen';
export default function StudentListScreen({ navigation }) {
    const [stuInfos, setStuInfos] = useState([
        {stuId:'001',stuName:'Chea Chan',stuPhone:'0974664594', stuClass:'Programming B', stuProvince:'Kompong Thom', stuAge:25},
        {stuId:'002',stuName:'Chea Devit',stuPhone:'097483494', stuClass:'Programming A', stuProvince:'Kandal', stuAge:22},
        {stuId:'003',stuName:'Neam Sinat',stuPhone:'0974079859', stuClass:'Programming B', stuProvince:'Bong Teay Mean Chey', stuAge:20},
        {stuId:'004',stuName:'Thorng Danet',stuPhone:'098584774', stuClass:'Programming A', stuProvince:'Komport', stuAge:19}
    ])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={stuInfos}
            renderItem={({ item }) =>(
                <TouchableOpacity onPress={() => navigation.navigate('StudentDetailsScreen', item)}>
                    <Text style={{alignItems:'center', justifyContent:'center'}}>{item.stuName}</Text>
                </TouchableOpacity>
            )}
        />
      </View>
    );
  }