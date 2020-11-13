import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SocialButton } from '../../components'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../../store/actions'

const Login = () => {
  const dispatch = useDispatch()

  const FbLogin = () => {
    console.log('fb login')
    try {
      dispatch(AuthActions.fbLogin())
    } catch (error) {
      console.log(error)
    }
  }

  const GoogleLogin = () => {
    console.log('google login')
    try {
      dispatch(AuthActions.googleLogin())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <SocialButton
        btnTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={FbLogin}
      />
      <SocialButton
        btnTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={GoogleLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
})

export default Login
