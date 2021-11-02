import React, {useState} from 'react';
import {StyleSheet, View, Text,Button,FlatList, Linking,ScrollView,TouchableOpacity} from 'react-native';
import {globalStyle} from '../style/style'
import { TextInput } from 'react-native-gesture-handler';
import comments from "../data/comments.json";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Recept({ route,navigation }){
 
  const items = route.params;

  const loadScene = () => {
    navigation.navigate('Main');
}

const [com,setCom] = useState([{
  Text:'',
  index:'',
}]);

const [textCom,setTextCom]= useState('');

// function filtringFuncCom(){
//   jsonObjectAr.filter((it) => {
//       if(it.IndexRecipes === items.index ){
//         setCom((list) => {
//           return[{
//             index:it.index,
//             Text: it.Text},
//             ...list
//           ]
//         })
//       }
//     })
// };

const onChange = (text) => {
  setTextCom(text);
}

const addCom = (text) => {
  //asynchrone
  if(com === null){
  setCom(() => {
    return[
      {
        Text: text,
        index: Math.random().toString(36).substring(3),
      }
    ]
  })}else{
    setCom((list) => {
      return[
        {
          Text: text,
          index: Math.random().toString(36).substring(3),
        },
        ...list
      ]
    })
  }
  removeValue();
  saveObject(com);
}

//Save JSON objeck in Async Storage
const saveObject = async (value) => {
    console.log(value);
    try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(items.index.toString(),jsonValue);
    } catch (e) {
      console.log(e);
    }
};

//delete all item in Async Storage
  const removeValue = async () => {
    try{
      await AsyncStorage.removeItem(items.index.toString());
    } catch (e) {
      console.log(e);
    }
    console.log("Storage clear index: " + items.index);
  }


//Get item Json format 
 getObject = async () => {
  try{
    const jsonValue = await AsyncStorage.getItem(items.index.toString());
    if(jsonValue != null){
      setCom(JSON.parse(jsonValue));
    }
  }catch (e) {
    console.log(e)
  }
}

const removeCom = (item) => {
  setCom((list) => {
    return list.filter(com => com.index != item)
  })
}

const removeFunc = (item) => {
    removeCom(item);
    removeValue();
    console.log("remove " + com)
    saveObject(com);
}


    return(
    <ScrollView >
      <View>
          <View style={globalStyle.main}>
            <Text style={globalStyle.textTitleRecipes}>{items.title}</Text>
          </View>
          <View>
            <Text style={globalStyle.textTitleRec}>Ingredients:</Text>
            <FlatList data={items.ingredients} renderItem={({item}) => (
                  <Text style={{paddingLeft:8}}>{item.quantity + " " + item.name + " " + item.type}</Text>
            )}/>
          </View>
          <View>
            <Text style={globalStyle.textTitleRec}>Steps:</Text>
            <Text style={{padding:10}}>{items.steps}</Text>
          </View>
      </View>
      <View>
          <Text style={globalStyle.textTitleRecipes}>Comments</Text>
          <FlatList data={com} renderItem={({item}) => (
            <TouchableOpacity onPress={() => removeFunc(item.index)}>
               <Text >{item.Text}</Text>
            </TouchableOpacity>
              )}/>
          {console.log(items.index)}
          <Button color="#841584" title="Show comments" onPress={() => getObject()}/>
          <TextInput placeholder="add new comments" onChangeText={onChange}/>
          <Button color="black" title="Add comments" onPress={() => addCom(textCom)}/>
      </View>
          <Button color="#841584" styl title="Go to Original Site" onPress={() => Linking.openURL(items.originalURL)}/>
          <Button style={styles.button} title="Go Main Page" onPress={loadScene} />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"black",
  },
  arena: {
    flex:1,
  },
  smallButton :{
    width:'5px',
    color:'red!important',
  }
})


