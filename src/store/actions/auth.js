import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'
import { AuthActionTypes } from '../types'

export const login = () => {
  console.log('login')
  return (dispatch) => {
    dispatch({ type: AuthActionTypes.AUTHENTICATE })
  }
}

export const logout = () => {
  console.log('logout')
  return (dispatch) => {
    dispatch({ type: AuthActionTypes.LOGOUT })
  }
}
