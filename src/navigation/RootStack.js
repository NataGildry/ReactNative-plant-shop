import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Image} from 'react-native';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import SignUp from '../screens/SignUp';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';

import { theme } from '../constants';


const Stack = createStackNavigator();

export const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white, // or 'white
                borderBottomColor: "transparent",
                elevation: 0 // for android
            },
            headerBackImage: () => (<Image
                 source={require("../../assets/icons/Back.png")}
            />),
            headerBackTitle: true,
            headerLeftContainerStyle: {
                alignItems: "center",
                marginLeft: theme.sizes.base * 2,
                paddingRight: theme.sizes.base
            },
            headerRightContainerStyle: {
                alignItems: "center",
                paddingRight: theme.sizes.base
            },
            headerTitle: null
        }}>
            <Stack.Screen name="Welcome" component={Welcome}
                          options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Forgot" component={Forgot}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Browse" component={Browse}/>
            <Stack.Screen name="Product" component={Product}/>
            <Stack.Screen name="Explore" component={Explore}/>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    );
};


