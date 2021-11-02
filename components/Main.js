import React, { useState } from 'react';
import {StyleSheet, View, Text,TouchableOpacity, FlatList} from 'react-native';
import {globalStyle} from '../style/style'

// Создаем локальный массив с категориями

export default function Main({ navigation }){
 

  const [category,setCategory] = useState([
      {title: "Milk", value: 1},
      {title: "Beef", value: 2},
      {title: "Chiken", value: 3},
  ]);

    return(
     <View style={globalStyle.main}>
        <Text style={globalStyle.title}> Category</Text>
        <FlatList data={category} renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Kategorijos',item)}>
                <Text style={globalStyle.textCategory}>{item.title}</Text>
            </TouchableOpacity>
        )}/>
      </View>
    );
}

const styles = StyleSheet.create({
 
})


    