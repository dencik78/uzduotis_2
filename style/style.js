import { StyleSheet } from 'react-native';


export const globalStyle = StyleSheet.create({
    main: {
        padding: 20,
        fontFamily: 'akronim',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'900',
    },
    text: {
        textAlign:'left',
    
    },
    textName: {
        fontWeight:'bold',
        
    },
    textTitleRecipes:{
        textAlign:'center',
        fontSize: 30,
        fontWeight:'bold',
    },
    textTitleRec:{
        textAlign:'left',
        fontSize: 20,
        fontWeight:'bold',
    },
    textCategory: {
        fontSize:25,
        color:"white",
        textAlign:'center',
        justifyContent:'space-around',
        borderRadius: 20,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'purple',
        borderBottomWidth:7,
        marginBottom:10,
        marginTop:5,


    }
})