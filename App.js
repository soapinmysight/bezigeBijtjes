import React, { useCallback, useEffect } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { save, get } from "./src/services/storage";
import Footer from "./src/components/footer/footer";
import HomeScreen from './src/screens/homeScreen/homeScreen';
import FavScreen from "./src/screens/favScreen/favScreen";
import ListScreen from "./src/screens/listScreen/listScreen";
import MapScreen from "./src/screens/mapScreen/mapScreen";
import SettingsScreen from "./src/screens/settingsScreen/settingsScreen";

// Create a stack navigator instance
const Stack = createStackNavigator();

const App = () => {
    // Determine the current color scheme (light or dark)
    const theme = useColorScheme();
    const appearance = useColorScheme();

    // Set the application theme for the first time
    const setAppTheme = useCallback(async () => {
        const IS_FIRST = await get('IS_FIRST');
        if (IS_FIRST === null) {
            await save('Theme', appearance);
            await save('IsDefault', true);
            await save('IS_FIRST', true);
        }
    }, [appearance]);

    useEffect(() => {
        const initializeTheme = async () => {
            await setAppTheme();
        };
        initializeTheme();
    }, [setAppTheme]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ animationEnabled: false }} initialRouteName="Home">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "Dit is home",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="FavScreen"
                    component={FavScreen}
                    options={{
                        title: "Dit zijn je favorieten",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="ListScreen"
                    component={ListScreen}
                    options={{
                        title: "Hier is de lijst",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="MapScreen"
                    component={MapScreen}
                    options={{
                        title: "Hier is de kaart",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={{
                        title: "Verander hier je settings",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
