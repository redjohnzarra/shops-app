import React from 'react'
import {
  View, Text, FlatList, ActivityIndicator
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Shops extends React.Component {

  goToShop = (shop) => {
    return () => {
      this.props.navigation.navigate("Shop", {
        shopId: shop.id,
        shopName: shop.name
      })
    }
  }

  renderShops = ({item}) => {
    return (
      <Text onPress={this.goToShop(item)}>
        {item.name}
      </Text>
    )
  }

  render() {
    const {loading, allShops} = this.props

    if(loading) return <ActivityIndicator size="large" />;

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

//query ${queryName}
const shopsQuery = gql`
  query shopsQuery {
    allShops {
      id
      name
    }
  }
`;

export default graphql(shopsQuery, {
  props: ({data}) => ({...data})
})(Shops)
