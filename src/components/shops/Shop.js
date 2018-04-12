import React from 'react'
import {
  View, Text, ActivityIndicator, StyleSheet
} from 'react-native'
import { Fab, Icon } from 'native-base'
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

  editShop = () => {
    const {id, name, description} = this.props.Shop
    let payload = {
      id,
      name,
      description
    }

    this.props.navigation.navigate("NewShop", payload)
  }

  render() {
    const { Shop, loading } = this.props
    if(loading) return <ActivityIndicator size="large" />

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>Description: {this.props.Shop.description}</Text>
        <Fab
          style={styles.editShop}
          onPress={this.editShop}
        >
          <Icon name="edit" type="MaterialIcons" />
        </Fab>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  bodyText: {
    fontSize: 16
  },
  editShop: {
    backgroundColor: '#82D8D8'
  }
});

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
