import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Feeds = () => {
  return (
    <View style={styles.body}>
      <Text>Feeds</Text>
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

export default Feeds
