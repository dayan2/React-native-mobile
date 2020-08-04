import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet, Text, View} from "react-native";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({navigation}) => {
    return (
        <ExploreStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Explore" component={ExploreScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
        </ExploreStack.Navigator>
    )
}

export default ExploreStackScreen

const ExploreScreen = () => {
    return (
        <View style={styles.body}>
            <Text>Explore Screen</Text>
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
