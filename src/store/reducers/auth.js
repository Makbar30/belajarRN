import { AuthActionTypes } from '../types'

const initialState = {}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATE:
      return state
    case AuthActionTypes.LOGOUT:
      return state
    default:
      return state
  }
}

export default AuthReducer
