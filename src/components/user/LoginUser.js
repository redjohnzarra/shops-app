import React from 'react'
import {
  View, Text
} from 'react-native'
import UserForm from './UserForm'

class CreateUser extends React.Component{

  loginUser = () => {

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

export default (CreateUser);
