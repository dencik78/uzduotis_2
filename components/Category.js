import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Button} from 'react-native';
import {globalStyle} from '../style/style';
import receptiJson from '../data/recipeList.json';

//тут реализовать json парсинг и получить данные с нужной категорией с json в массив 

export default function Category({ route,navigation }){

  const [recept,setRecept] = useState([{
    title:"",
    index:"",
    ingredients:[],
    steps:[],
    imageURL:'',
  }]);

  function filtringFunc(e){
    console.log(e + " e");
     receptiJson.filter((it) => {
        if(it.categoriID === e ){
          if(recept === null){
          setRecept(() => {
            return[{
              title : it.name,
              index: it.index,
              ingredients : it.ingredients,
              steps : it.steps,
              imageURL : it.imageURL}
            ]
          })}else{
            setRecept((list) => {
              return[{
                title : it.name,
                index: it.index,
                ingredients : it.ingredients,
                steps : it.steps,
                imageURL : it.imageURL},
                ...list
              ]
            })
          }
        }
      })
  };

    return(
    
     <View style={globalStyle.main}>
        <Text style={globalStyle.title}>{route.params.title} for category</Text>
        <Button style={styles.buttonMy}  title="Set Items" onPress={() => filtringFunc(route.params.value)}/>
        <FlatList data={recept} renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Receptas',item)}>
                <Text style={globalStyle.textCategory}>{item.title}</Text>
            </TouchableOpacity>
        )}/>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonMy: {
  backgroundcolor: "black",
  color: "white",
  fontSize: 10,
  padding: 10 ,
  borderRadius: 5,
  margin: 10,
  }
})


