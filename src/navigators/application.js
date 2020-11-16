import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MainStack from './main'
import AuthStack from './auth'
import { AuthActions } from '../store/actions'

const ApplicationNavigator = () => {
  const dispatch = useDispatch()
  const [userData, setUser] = useState()
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const onAuthStateChanged = (user) => {
      if (user) {
        console.log('user: ', user.toJson())
        dispatch(AuthActions.authenticate(user.toJson()))
      }

      setUser(user)
      if (initializing) {
        setInitializing(false)
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return () => {
      subscriber
    } // unsubscribe on unmount
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
