import React from 'react'
import {
  View, Text, FlatList, ActivityIndicator
} from 'react-native'
import { List, ListItem, Body, Right, Icon } from 'native-base'
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
    const {screenProps} = this.props

    return (
      <View>
        <List>
          <FlatList
            data={screenProps.user.shops}
            renderItem={this.renderShops}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    )
  }
}

//query ${queryName}
//orderBy is default
// const shopsQuery = gql`
//   query shopsQuery {
//     allShops(orderBy: createdAt_DESC) {
//       id
//       name
//     }
//   }
// `;

// export default graphql(shopsQuery, {
//   props: ({data}) => ({...data})
// })(Shops)
export default Shops
