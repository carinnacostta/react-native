import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './telas/login';
import home from './telas/home';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="login" component={login}/>
                <Stack.Screen name="home" component={home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};

const styles = StyleSheet.create({});
export default App;