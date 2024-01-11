// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ZMWToUSDScreen from './screens/ZMWToUSDScreen';
import ZMWToPoundScreen from './screens/ZMWToPoundScreen';
import ZMWToEuroScreen from './screens/ZMWToEuroScreen';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}  tabBarOptions={{
          style: { backgroundColor: 'black' }, // Add your preferred background color
          activeTintColor: '#ff3300', // Add your preferred text color for the active tab
          inactiveTintColor: '#95a5a6', // Add your preferred text color for inactive tabs
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ZMW to USD" component={ZMWToUSDScreen} />
        <Tab.Screen name="ZMW to GBP" component={ZMWToPoundScreen} />
        <Tab.Screen name="ZMW to EUR" component={ZMWToEuroScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
