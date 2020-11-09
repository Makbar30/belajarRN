import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from '../navigators/main'
const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
