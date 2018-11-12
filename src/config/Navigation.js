import React, {Component} from 'react';
import {Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Login from '../screens/LoginForm/Login';
import BuatAkun from '../screens/BuatAkun/BuatAkun';

const loginIcon = require('../assets/login.png')
const userIcon = require('../assets/createAccount.png')

const bottomTabNavigator = createBottomTabNavigator({
    LogIn:{
        screen:Login,
        navigationOptions:{
            header:null,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source = {loginIcon}
                    style = {[styles.viewIcon,{tintColor}]}
                />
            )
        }
    },
    CreateAccount:{
        screen:BuatAkun,
        navigationOptions:{
            header:null,
            tabBarIcon:({tintColor}) => (
                <Image
                    source = {userIcon}
                    style={[styles.viewIcon,{tintColor}]}
                />
            )
        }
    }
})




const AppNavigator = createStackNavigator({
    Main:{
        screen:bottomTabNavigator,
        navigationOptions:{
            header:null
        },
        swipeEnabled:false
    }
}
)


const styles = StyleSheet.create({
    viewIcon:{
        height:25,
        width:25
    }
})

export default AppNavigator;
