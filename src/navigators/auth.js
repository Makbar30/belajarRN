import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../pages'
import { GoogleSignin } from '@react-native-community/google-signin'

const Stack = createStackNavigator()

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '664339182812-kckeinln4o674eu4b5o18qsg33bgri2d.apps.googleusercontent.com',
    })
  }, [])
  return (
    <Stack.Navigator initialRouteNam="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
