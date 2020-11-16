import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Onboarding } from '../pages'
import { GoogleSignin } from '@react-native-community/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

const AuthStack = () => {
  const [alreadyLaunched, setAlreadyLaunched] = useState(null)
  let initRouteName
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
      .then((value) => {
        console.log(value)
        if (value) {
          AsyncStorage.setItem('alreadyLaunched', 'true')
          setAlreadyLaunched(true)
        } else {
          setAlreadyLaunched(false)
        }
      })
      .catch(() => setAlreadyLaunched(null))
    GoogleSignin.configure({
      webClientId:
        '664339182812-kckeinln4o674eu4b5o18qsg33bgri2d.apps.googleusercontent.com',
    })
  }, [])

  if (alreadyLaunched === null) {
    return null
  } else if (alreadyLaunched === true) {
    console.log('langsung login')
    initRouteName = 'login'
  } else {
    initRouteName = 'onboarding'
  }

  return (
    <Stack.Navigator initialRouteName={initRouteName}>
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
