import React from 'react'
import {
  View, Text
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import navStyles from '../styles/navStyles'

class Shop extends React.Component{
  static navigationOptions = {
    title: "Shop",
    ...navStyles
  }

  render() {
    const { Shop, loading } = this.props
    if(loading) return null

    return (
      <View>
        <Text>Shop {Shop.id}</Text>
        <Text>Shop {Shop.name}</Text>
      </View>
    )
  }
}

const shopQuery = gql`
  query Shop($id: ID!) {
    Shop(id: $id) {
      id
      name
    }
  }
`

export default graphql(shopQuery, {
  props: ({data}) => ({...data}),
  options: ({navigation}) => ({ // from props.navigation
    variables: { //things passed in query
      id: navigation.state.params.shopId
    }
  })
})(Shop)
