import React from 'react'
import {
  View, Text, Button
} from 'react-native'
import { Form, Item, Label, Input } from 'native-base'

class UserForm extends React.Component{
  state = {
    email: '',
    password: ''
  }

  stateChange = (name) => {
    return (value) => {
      this.setState({
        [name]: value
      })
    }
  }

  submitForm = () => {

  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={this.stateChange('email')}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={this.stateChange('password')}
          />
        </Item>
        <Button
          title={this.props.type}
          onPress={this.submitForm}
        />
      </Form>
    )
  }
}

export default (UserForm);
