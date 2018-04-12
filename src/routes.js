import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../src/components/Home'
import Shop from '../src/components/shops/Shop'
import NewShop from '../src/components/shops/NewShop'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Shop: {
    screen: Shop
  },
  NewShop: {
    screen: NewShop
  }
})
