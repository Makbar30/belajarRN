import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const BottomBarItem = ({ label, isFocused, onLongPress, onPress }) => {
  const Icon = () => {
    switch (label) {
      case 'Home':
        return (
          <FontAwesome
            size={22}
            name="home"
            color={isFocused ? '#309D30' : '#c0dfb9'}
          />
        )
      case 'Shop':
        return (
          <FontAwesome
            size={22}
            name="shopping-cart"
            color={isFocused ? '#309D30' : '#c0dfb9'}
          />
        )
      case 'Academy':
        return (
          <FontAwesome
            size={22}
            name="recycle"
            color={isFocused ? '#309D30' : '#c0dfb9'}
          />
        )
      case 'Profile':
        return (
          <FontAwesome
            size={22}
            name="user"
            color={isFocused ? '#309D30' : '#c0dfb9'}
          />
        )
      default:
        return null
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}
    >
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  containerFocus: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#c0dfb9',
    flexDirection: 'row',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default BottomBarItem
