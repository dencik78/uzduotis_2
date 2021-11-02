import React from 'react';
import Category from './components/Category';
import Recept from './components/Recept';
import Main from './components/Main';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
                name="Main"
                component={Main}
                options={
                    {
                        title: 'Pagrindinis',
                        headerStyle: {backgroundColor: 'black', height:50 },
                        headerTitleStyle: { color:"green",fontStyle:'italic',fontSize:35,fontWeight:'bold' }
                    }
                }
            />
            <Stack.Screen 
                name="Kategorijos"
                component={Category}
                options={{title: 'Kategorijos'}}
            />
              <Stack.Screen 
                name="Receptas"
                component={Recept}
                options={{title: 'Receptas'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}