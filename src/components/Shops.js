import React from 'react'
import {
  View, Text, FlatList
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Shops extends React.Component {

  goToShop = (shopId) => {
    return () => {
      this.props.navigation.navigate("Shop", {
        shopId
      })
    }
  }

  renderShops = ({item}) => {
    return (
      <Text onPress={this.goToShop(item.id)}>
        {item.name}
      </Text>
    )
  }

  render() {
    const {loading, allShops} = this.props

    if(loading) return null;

    return (
      <View>
        <FlatList
          data={allShops}
          renderItem={this.renderShops}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const shopsQuery = gql`
  {
    allShops {
      id
      name
    }
  }
`;

export default graphql(shopsQuery, {
  props: ({data}) => ({...data})
})(Shops)
