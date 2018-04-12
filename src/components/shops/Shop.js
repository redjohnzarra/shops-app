import React from 'react'
import {
  View, Text, ActivityIndicator
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import navStyles from '../../styles/navStyles'

class Shop extends React.Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: `Shop ${navigation.state.params.shopName}`,
      ...navStyles
    }
  }

  render() {
    const { Shop, loading } = this.props
    if(loading) return <ActivityIndicator size="large" />

    return (
      <View>
        <Text>Description: {this.props.Shop.description}</Text>
      </View>
    )
  }
}

const shopQuery = gql`
  query Shop($id: ID!) {
    Shop(id: $id) {
      id
      name
      description
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
