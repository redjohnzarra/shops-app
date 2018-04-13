import React from 'react'
import {
  View, Text, ActivityIndicator
} from 'react-native'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import ShopForm from './ShopForm'

import navStyles from '../../styles/navStyles'

class UpsertShop extends React.Component{
  static navigationOptions =  {
    title: "New Shop",
    ...navStyles
  }

  state = {
    loading: false
  }

  upsertShop = ({name, description}) => {
    const {newShop, updateShop, navigation, screenProps} = this.props
    this.setState({
      loading: true
    })

    if(navigation.state.params.id){
      //from mutation fn
      updateShop({
        variables: {
          id: navigation.state.params.id,
          name,
          description,
          userId: screenProps.user.id //userId from graph.cool
        }
      }).then((response) => {
        navigation.goBack();
      }).catch(error => {
        console.log("error", error)
      })
    }else{
      //from mutation fn
      newShop({
        variables: {
          name,
          description,
          userId: screenProps.user.id //userId from graph.cool
        }
      }).then((response) => {
        navigation.goBack();
      }).catch(error => {
        console.log("error", error)
      })
    }
  }

  render() {
    return (
      <View>
        {
          this.state.loading?(
            <ActivityIndicator size="large" />
          ):(
            <ShopForm onSubmit={this.upsertShop} {...this.props.navigation.state.params} />
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
  mutation newShop($name: String!, $description: String!, $userId: ID!){
    createShop(name: $name, description: $description, userId: $userId) {
      id
    }
  }
`

const updateShop = gql`
  mutation updateShop($id: ID!, $name: String, $description: String, $userId: ID!){
    updateShop(id: $id, name: $name, description: $description, userId: $userId) {
      id
    }
  }
`

//mutate function
//refetchQueries for queryName
//shopsQuery defined at Shops.js
export default compose(
  graphql(newShop, {
    name: 'newShop',
    options: {
      refetchQueries: ["userQuery"]
    }
  }),
  graphql(updateShop, {name: "updateShop", options: { refetchQueries: ["Shop"] }})
)(UpsertShop);
