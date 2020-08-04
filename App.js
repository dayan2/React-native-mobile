import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {
    View,
    ActivityIndicator
} from 'react-native';

import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import MainTabScreen from "./components/mainTabScreen";
import DrawerContent from "./components/DrawerContent";
import SupportStackScreen from "./components/SupportScreen";
import SettingStackScreen from "./components/SettingsScreen";
import RootStackScreen from "./components/RootStackScreen";
import {loginReducer, initialLoginState} from "./reducers";
import {AuthContext} from "./context";

const Drawer = createDrawerNavigator();

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#333333'
        }
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#333333',
            text: '#ffffff'
        }
    }

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;

            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
        },
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        }
    }), []);

    useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    {loginState.userToken !== null ? (
                            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                                <Drawer.Screen name="Main" component={MainTabScreen}/>
                                <Drawer.Screen name="Support" component={SupportStackScreen}/>
                                <Drawer.Screen name="Setting" component={SettingStackScreen}/>
                            </Drawer.Navigator>
                        ) :
                        <RootStackScreen/>
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
};

export default App;
