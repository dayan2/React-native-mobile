import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet, Text, View} from "react-native";

const SettingStack = createStackNavigator();

const SettingStackScreen = ({navigation}) => {
    return (
        <SettingStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#694fad'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <SettingStack.Screen name="Setting" component={SettingScreen}
                 options={{
                     headerLeft: () => (
                         <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()} />
                     )
                 }}
            />
        </SettingStack.Navigator>
    )
}

export default SettingStackScreen

const SettingScreen = () => {
    return (
        <View style={styles.body}>
            <Text>Setting Screen</Text>
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
