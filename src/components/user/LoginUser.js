import React from 'react'
import {
  View, Text
} from 'react-native'
import UserForm from './UserForm'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { signIn } from '../../utils/loginUtils'

class LoginUser extends React.Component{

  loginUser = async ({email, password}) => { //from onSubmit
    try {
      const signin = await this.props.signinUser({
        variables: {email, password}
      });
      // console.log("signin data", signin.data.signinUser.token) //token from mutation at the bottom
      signIn(signin.data.signinUser.token)
      this.props.client.resetStore() //from this.props because of withApollo wrapper
    } catch(e) {
      console.log("error at try catch",e)
    }
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:'center'}}>Login</Text>
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
