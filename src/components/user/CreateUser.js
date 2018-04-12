import React from 'react'
import {
  View, Text
} from 'react-native'
import UserForm from './UserForm'

class CreateUser extends React.Component{

  createUser = () => {

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

export default (CreateUser);
