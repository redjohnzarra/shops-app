import React from 'react'
import {
  View, Text
} from 'react-native'
import UserForm from './UserForm'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { signIn } from '../../utils/loginUtils'

class CreateUser extends React.Component{

  createUser = async ({email, password}) => { //from onSubmit
    try {
      const user = await this.props.createUser({ //this.props.createUser -> createUser is from the string below at graphql()
        variables: {email, password}
      });
      const signin = await this.props.signinUser({
        variables: {email, password}
      });
      // console.log("signin data", signin.data.signinUser.token) //token from mutation at the bottom
      signIn(signin.data.signinUser.token)
    } catch(e) {
      console.log("error at try catch",e)
    }
  }

  render() {
    return (
      <View>
        <Text>Register</Text>
        <UserForm
          type="Register"
          onSubmit={this.createUser}
        />
      </View>
    )
  }
}

// createUser() from graphcool
const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(
      authProvider: { email: {
        email: $email,
        password: $password
      }}
    ){
      id
    }
  }
`

// signinUser() from graphcool
const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(
      email: {
        email: $email,
        password: $password
      }
    ){
      token
    }
  }
`

export default compose(
  graphql(signinUser, {name: "signinUser"}),
  graphql(createUser, {name: "createUser"})
)(CreateUser);
