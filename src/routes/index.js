import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import PayButton from '../components/PayButton';

import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Pay from '../pages/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: AntDesign,
    name: 'bells',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

const Routes = () => (
  <Tab.Navigator
    initialRouteName="Wallet"
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === 'Pay') {
          return (
            <PayButton
              onPress={() => navigation.navigate('Pay')}
              focused={focused}
            />
          );
        }

        const { lib: IconLib, name } = icons[route.name];

        return <IconLib name={name} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: '#131418',
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#92929c',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Início',
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={Wallet}
      options={{
        title: 'Carteira',
      }}
    />
    <Tab.Screen
      name="Pay"
      component={Pay}
      options={{
        title: '',
      }}
    />

    <Tab.Screen
      name="Notifications"
      component={Pay}
      options={{
        title: 'Notificações',
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Pay}
      options={{
        title: 'Ajustes',
      }}
    />
  </Tab.Navigator>
);

export default Routes;
