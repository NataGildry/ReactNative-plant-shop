import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';
import * as SplashScreen from 'expo-splash-screen';

import {RootStack} from './src/navigation/RootStack';
import Block from './src/components/Block';

// import all used images
const images = [
    require("./assets/images/plants_1.png"),
    require("./assets/images/plants_2.png"),
    require("./assets/images/plants_3.png"),
    require("./assets/images/ava.jpg"),
    require("./assets/images/exp6.png"),
    require("./assets/images/exp5.png"),
    require("./assets/images/exp4.png"),
    require("./assets/images/exp3.png"),
    require("./assets/images/exp2.png"),
    require("./assets/images/exp1.png"),
    require("./assets/icons/plants.png"),
    require("./assets/icons/seeds.png"),
    require("./assets/icons/flowers.png"),
    require("./assets/icons/sprayers.png"),
    require("./assets/icons/pots.png"),
    require("./assets/icons/fertilizers.png"),
];



export default class App extends Component {
    state = {
        isLoadingComplete: false,
    };
    handleResourcesAsync = async () => {
        // we're caching all the images
        // for better performance on the app
        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    };
    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this.handleResourcesAsync}
                    onError={error => console.warn(error)}
                    onFinish={() => this.setState({ isLoadingComplete: true },
                        async () => {
                        await SplashScreen.hideAsync()})}
                />
            );
        }
        return (
            <Block white>
                <NavigationContainer>
                        <RootStack/>
                        <StatusBar style="auto"/>
                </NavigationContainer>
            </Block>

        );
    }
}
const styles = StyleSheet.create({});
