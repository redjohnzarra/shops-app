import React from 'react'
import {
  View, Text, FlatList
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Shops extends React.Component {

  renderShops = ({item}) => {
    return (
      <Text>{item.name}</Text>
    )
  }

  render() {
    const {loading, allShops} = this.props
    console.log("this.props", allShops)

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
