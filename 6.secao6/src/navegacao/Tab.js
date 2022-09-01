import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Tab = createBottomTabNavigator();

export default props => ( 
    //estilos das tabs
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'TelaA':
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
            break;
          case 'TelaB':
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
            break;
          case 'TelaC':
            iconName = focused ? 'ios-list-box' : 'ios-list';
            break;
        }

        if (route.name === 'TelaA') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel:true
    })}>
        <Tab.Screen name="TelaA" component={TelaA} options={{title:"Inicial"}}/>
        <Tab.Screen name="TelaB" component={TelaB} options={{title:"Meio"}}/>
        <Tab.Screen name="TelaC" component={TelaC} options={{title:"Final"}}/>
    </Tab.Navigator>
)