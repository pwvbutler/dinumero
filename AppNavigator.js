import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import HabitScreen from './screens/HabitScreen';
import AddHabitScreen from './screens/AddHabitScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Habit" component={HabitScreen} />
      <Stack.Screen name="AddHabit" component={AddHabitScreen} />
    </Stack.Navigator>
  );
}
