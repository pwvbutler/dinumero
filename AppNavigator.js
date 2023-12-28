import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import MainScreen from './screens/MainScreen.js'
import HabitScreen from './screens/HabitScreen.js'
import AddHabitScreen from './screens/AddHabitScreen.js'

const AppNavigator = createSwitchNavigator({
  Main: MainScreen,
  Habit: HabitScreen,
  AddHabit: AddHabitScreen,
}, {
  initialRouteName: 'Main',
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer