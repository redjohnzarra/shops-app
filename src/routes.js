import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../src/components/Home'
import Shop from '../src/components/shops/Shop'
import NewShop from '../src/components/shops/NewShop'

import Login from '../src/components/user/Login'

const Navigator = StackNavigator({
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

const NavWrapper = (props) => {
  //check if user exist here

  return <Login />
}

export default NavWrapper
