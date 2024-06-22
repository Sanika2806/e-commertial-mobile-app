import React from 'react';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Tabs from './Components/Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
