import React from 'react'
import {
  View, Text, ActivityIndicator
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ShopForm from './ShopForm'

import navStyles from '../../styles/navStyles'

class NewShop extends React.Component{
  static navigationOptions =  {
    title: "New Shop",
    ...navStyles
  }

  state = {
    loading: false
  }

  newShop = ({name, description}) => {
    const {newShop, navigation} = this.props
    this.setState({
      loading: true
    })
    //from mutation fn
    newShop({
      variables: {
        name,
        description
      }
    }).then((response) => {
      navigation.goBack();
    }).catch(error => {
      console.log("error", error)
    })
  }

  render() {
    return (
      <View>
        {
          this.state.loading?(
            <ActivityIndicator size="large" />
          ):(
            <ShopForm onSubmit={this.newShop} />
          )
        }
      </View>
    )
  }
}

//mutation for upsert
//createShop from graphCool
//id - ask for id response
const newShop = gql`
  mutation newShop($name: String!, $description: String!){
    createShop(name: $name, description: $description) {
      id
    }
  }
`

//mutate function
//refetchQueries for queryName
//shopsQuery defined at Shops.js
export default graphql(newShop, {
  name: 'newShop',
  options: {
    refetchQueries: ["shopsQuery"]
  }
})(NewShop);
