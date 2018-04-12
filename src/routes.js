import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from '../src/components/Home'
import Shop from '../src/components/shops/Shop'
import NewShop from '../src/components/shops/NewShop'

import Login from '../src/components/user/Login'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

const NavWrapper = ({ loading, user }) => { //loading is an apollo thing
  //check if user exist here
  if(loading) return <ActivityIndicator size="large" />
  if(!user) return <Login />
  return <Navigator screenProps={{user}} />
}

const userQuery = gql`
  query userQuery {
    user {
      id
      email
      shops(orderBy: createdAt_DESC) {
        id
        name
      }
    }
  }
`

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(NavWrapper)
