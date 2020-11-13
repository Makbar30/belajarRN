import React from 'react'
import { Platform, StyleSheet, View, Text,Image } from 'react-native'
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
      <Text style={{fontSize: 18, alignSelf: 'center', marginBottom: 50}}>Wellcome, Bwang!</Text>
      <View style={styles.square}>
        <Image style={styles.banner} source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.waste360.com%2Fsites%2Fwaste360.com%2Ffiles%2Fuploads%2F2016%2F01%2Ftrash-mountain.jpg&f=1&nofb=1',
        }}/>
      </View>
      <View style={[styles.squareText, Platform.OS === 'ios' ? styles.ios : null]}>
        <Text style={{ fontWeight: "bold", fontSize: 18, alignSelf: 'center' }}>React Native</Text>
        <Text style={{ color: "gray", textAlign: 'justify' }}>Consectetur adipiscing elit. Vivamus gravida, metus eleifend vulputate fringilla, ligula odio vehicula tortor, ut iaculis nulla eros id turpis. </Text>
      </View>
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
  square: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },squareText: {
    width: '80%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },banner:{
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
    height: 200
  }
})

export default Home
