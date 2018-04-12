import React from 'react'
import {
  View, Text, FlatList, ActivityIndicator
} from 'react-native'
import { List, ListItem, Body, Right, Icon } from 'native-base'
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
      <ListItem onPress={this.goToShop(item)}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  render() {
    const {loading, allShops} = this.props

    if(loading) return <ActivityIndicator size="large" />;

    return (
      <View>
        <List>
          <FlatList
            data={allShops}
            renderItem={this.renderShops}
            keyExtractor={item => item.id}
          />
        </List>
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
