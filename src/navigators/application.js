import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MainStack from './main'
import AuthStack from './auth'

const ApplicationNavigator = () => {
  const [userData, setUser] = useState()
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const onAuthStateChanged = (user) => {
      console.log('user: ', user.toJson())
      setUser(user)
      if (initializing) {
        setInitializing(false)
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) {
    return null
  }

  return (
    <NavigationContainer>
      {userData ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default ApplicationNavigator
