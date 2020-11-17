import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is Profile Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
})

export default Profile
