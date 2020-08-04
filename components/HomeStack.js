import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons'
import {Button, StyleSheet, Text, View, StatusBar} from "react-native";
import { useTheme } from '@react-navigation/native';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen

const HomeScreen = ({navigation}) => {
    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.body}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>Home Screen</Text>
            <Button
                title="Go to details"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

