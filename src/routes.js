import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../src/components/Home'
import Shop from '../src/components/Shop'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Shop: {
    screen: Shop
  }
})
