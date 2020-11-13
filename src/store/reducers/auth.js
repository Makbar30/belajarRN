import { AuthActionTypes } from '../types'

const initialState = {
  user: null,
  token: null,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATE:
      return {
        token: null,
        user: action.user,
      }
    case AuthActionTypes.LOGOUT:
      return state
    default:
      return state
  }
}

export default AuthReducer
