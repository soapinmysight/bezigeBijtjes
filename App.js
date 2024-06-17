import React from 'react';
import {View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './src/screens/map/map';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Button title="Go to map" onPress={() => navigation.navigate('Map')} />
          </View>

  );
};

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{animationEnabled:false}} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
  )
};

export default App;