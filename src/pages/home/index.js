import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../../store/actions'
import { SocialButton } from '../../components'

const Home = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    try {
      dispatch(AuthActions.logout())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.body}>
      <SocialButton
        btnTitle="Logout"
        btnType="sign-out"
        backgroundColor="#77dd77"
        color="#196319"
        onPress={logOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
