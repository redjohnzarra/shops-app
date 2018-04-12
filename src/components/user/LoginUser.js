import React from 'react'
import {
  View, Text
} from 'react-native'
import UserForm from './UserForm'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

class LoginUser extends React.Component{

  loginUser = async ({email, password}) => { //from onSubmit
    try {
      const signin = await this.props.signinUser({
        variables: {email, password}
      });
      console.log("signin data", signin.data.signinUser.token) //token from mutation at the bottom
    } catch(e) {
      console.log("error at try catch",e)
    }
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm
          type="Login"
          onSubmit={this.loginUser}
        />
      </View>
    )
  }
}

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

export default graphql(signinUser, {name: "signinUser"})(LoginUser);
