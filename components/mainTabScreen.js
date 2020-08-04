import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeStackScreen from "./HomeStack";
import DetailStackScreen from "./DetailStack";
import ExploreStackScreen from "./ExploreScreen";
import ProfileStackScreen from "./ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26} />
                )
            }}/>

            <Tab.Screen name="Notifications" component={DetailStackScreen} options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                )
            }} />

            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26} />
                )
            }}/>

            <Tab.Screen name="Explore" component={ExploreStackScreen} options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#d02860',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default MainTabScreen
