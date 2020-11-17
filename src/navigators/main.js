import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Academy, Home, Profile, Shop } from '../pages'
import { CustomTabBar } from '../components'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Academy"
        component={Academy}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
