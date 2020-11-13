import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthActions } from '../store/actions'
import auth from '@react-native-firebase/auth'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home, About, Feeds } from '../pages'
import { useCallback } from 'react'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Bottom = createBottomTabNavigator()


const MainNavigator = () => {
  //navigation.navigate('Profile')
  // const dispatch = useDispatch()
  // const userData = useSelector((state) => state.auth.user)
  // const setUserData = useCallback(
  // async (user) => {
  // if (user) {
  // try {
  // console.log(user.toJSON())
  // console.log('userReducer: ', userData)
  // } catch (error) {
  // console.log(error)
  // }
  // }
  // },
  // [userData],
  // )

  // useEffect(() => {
  // const user = auth().currentUser
  // setUserData(user)
  // return () => {
  // user
  // }
  // }, [setUserData])
  const BottomNavigator = () => {
    return (
      <Bottom.Navigator>
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }} />
        <Bottom.Screen
          name="Feeds"
          component={Feeds}
          options={{ header: () => null }} />
      </Bottom.Navigator>
    )

  }
  return (

    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Home"
    //     component={Home}
    //     options={{ header: () => null }}
    //   />
    // </Stack.Navigator>

    <Drawer.Navigator>
      <Drawer.Screen
        name="Profile"
        component={BottomNavigator}
        options={{ header: () => null }}
      />
      <Drawer.Screen
        name="Sign Out"
        component={About}
        options={{ header: () => null }}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
