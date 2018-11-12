import React, {Component} from 'react';
import {Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Bookmark from '../screens/Bookmark/Bookmark';
import ChatRoom from '../screens/ChatRoom/ChatRoom';
import Home from '../screens/Home/Home';
import Profil from '../screens/Profil/Profil';
import Stores from '../screens/Stores/Stores';

const profilIcon = require('../assets/profil.png')
const chatRoomIcon = require('../assets/chatRoom.png')
const homeIcon = require('../assets/home.png')
const bookmarkIcon = require('../assets/iconBookMark.png')
const storesIcon = require('../assets/store.png')

const Start = createBottomTabNavigator({
    Profil:{
        screen:Profil,
        navigationOptions:{
            header:null,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source = {profilIcon}
                    style = {[styles.viewIcon,{tintColor}]}
                />
            )
        }
    },
    ChatRoom:{
        screen:ChatRoom,
        navigationOptions:{
            header:null,
            tabBarIcon:({tintColor}) => (
                <Image
                    source = {chatRoomIcon}
                    style={[styles.viewIcon,{tintColor}]}
                />
            )
        }
    },
    Home:{
        screen:Home,
        navigationOptions:{
            header:null,
            tabBarIcon:({tintColor}) => (
                <Image
                    source = {homeIcon}
                    style={[styles.viewIcon,{tintColor}]}
                />
            )
        }
    },
    Bookmark:{
        screen:Bookmark,
        navigationOptions:{
            header:null,
            tabBarIcon:({tintColor}) => (
                <Image
                    source = {bookmarkIcon}
                    style={[styles.viewIcon,{tintColor}]}
                />
            )
        }
    },
    Stores:{
        screen:Stores,
        navigationOptions:{
            header:null,
            tabBarIcon:({tintColor}) => (
                <Image
                    source = {storesIcon}
                    style={[styles.viewIcon,{tintColor}]}
                />
            )
        }
    }

})

const styles = StyleSheet.create({
    viewIcon:{
        height:25,
        width:25
    }
})

export default Start;
