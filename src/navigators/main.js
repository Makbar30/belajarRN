import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
