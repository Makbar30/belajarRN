import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthActions } from '../store/actions'
import auth from '@react-native-firebase/auth'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages'
import { useCallback } from 'react'

const Stack = createStackNavigator()

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
