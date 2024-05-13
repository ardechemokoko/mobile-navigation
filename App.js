import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Portfolio from './screen/Portfolio';
import About from './screen/About';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'orange',
        },
        headerTintColor:'#FFF'
      }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
     
    );
}


