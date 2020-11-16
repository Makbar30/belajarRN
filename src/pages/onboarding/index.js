import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { onboarding_1, onboarding_2, onboarding_3 } from '../../assets/images'
import OnboardingView from 'react-native-onboarding-swiper'

const Dots = ({ selected }) => {
  let backgroundColor = selected ? '#309D30' : '#c0dfb9'
  let width = selected ? 30 : 10
  let dynamicStyles = { width, backgroundColor }

  return <View style={[styles.dot, dynamicStyles]} />
}

const Skip = ({ ...props }) => (
  <TouchableOpacity style={styles.bottomBarBtn} {...props}>
    <Text style={styles.bottomBarBtnText}>Skip</Text>
  </TouchableOpacity>
)

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.bottomBarBtn} {...props}>
    <Text style={styles.bottomBarBtnText}>Next</Text>
  </TouchableOpacity>
)

const Done = ({ ...props }) => (
  <TouchableOpacity style={styles.bottomBarBtn} {...props}>
    <Text style={styles.bottomBarBtnText}>Done</Text>
  </TouchableOpacity>
)

const Onboarding = ({ navigation }) => {
  return (
    <OnboardingView
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('login')}
      onDone={() => navigation.replace('login')}
      bottomBarColor="#ffffff"
      titleStyles={styles.title}
      pages={[
        {
          backgroundColor: '#ffffff',
          image: <Image style={styles.img} source={onboarding_1} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={styles.img} source={onboarding_2} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={styles.img} source={onboarding_3} />,
          title: 'Become The Star',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomBarBtn: {
    marginHorizontal: 20,
  },
  bottomBarBtnText: {
    fontSize: 16,
  },
  dot: {
    height: 10,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  img: {
    width: 350,
    height: 350,
  },
})

export default Onboarding
