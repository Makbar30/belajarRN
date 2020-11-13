import { AuthActionTypes } from '../types'
import auth from '@react-native-firebase/auth'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const authenticate = (user) => {
  return (dispatch) => {
    dispatch({ type: AuthActionTypes.AUTHENTICATE, user })
  }
}

export const fbLogin = () => {
  return async () => {
    console.log('fb-login init')
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ])
    if (result.isCancelled) {
      throw 'User cancelled the login process'
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken()
    if (!data) {
      throw 'Something went wrong obtaining access token'
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    )
    // Sign-in the user with the credential
    await auth().signInWithCredential(facebookCredential)
  }
}

export const googleLogin = () => {
  return async () => {
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn()
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    )
    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential)
  }
}

export const logout = () => {
  console.log('logout')
  return async (dispatch) => {
    await auth()
      .signOut()
      .then(() => AsyncStorage.removeItem('userData'))
    dispatch({ type: AuthActionTypes.LOGOUT })
  }
}
