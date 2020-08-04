import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet, Text, View} from "react-native";

const SupportStack = createStackNavigator();

const SupportStackScreen = ({navigation}) => {
    return (
        <SupportStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#694fad'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <SupportStack.Screen name="Support" component={SupportScreen}
                 options={{
                     headerLeft: () => (
                         <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()} />
                     )
                 }}
            />
        </SupportStack.Navigator>
    )
}

export default SupportStackScreen

const SupportScreen = () => {
    return (
        <View style={styles.body}>
            <Text>Support Screen</Text>
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
