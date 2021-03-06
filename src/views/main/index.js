import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyCard from '../myCard';
import MyCollection from '../myCollection';
import MyCoupons from '../myCoupons';
import AdditionalDetails from '../additionalDetails';
import { colors } from '../../variables';

const screens = [
  { name: 'Η Κάρτα μου', component: MyCard, icon: 'card-outline' },
  { name: 'Συλλογή', component: MyCollection, icon: 'planet-outline' },
  {
    name: 'Εξαργύρωση',
    component: MyCoupons,
    icon: 'cash-outline',
  },
  {
    name: 'Περισσότερα',
    component: AdditionalDetails,
    icon: 'ellipsis-horizontal-outline',
  },
];

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: colors.blue,
          },
          headerRight: () => (
            <Ionicons
              name="notifications-outline"
              size={25}
              color={colors.greyMid}
              style={{ marginRight: 32 }}
              onPress={() => navigation.navigate('Notifications')}
            />
          ),
        }}
        initialRouteName="Συλλογή"
      >
        {screens.map((screen, index) => (
          <Tab.Screen
            {...screen}
            key={index}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={screen.icon} color={color} size={size} />
              ),
              headerStatusBarHeight: 40,
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default Main;
