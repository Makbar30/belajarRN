/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { ApplicationNavigator } from './navigators/'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <ApplicationNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
