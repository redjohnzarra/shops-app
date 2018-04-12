import React from 'react'
import {
  View, Text, TextInput, Button, StyleSheet
} from 'react-native'
import { Form, Item, Input, Label } from 'native-base'

class ShopForm extends React.Component{
  state = {
    name: this.props.name || '',
    description: this.props.description || ''
  }

  submitForm = () => {
    this.props.onSubmit({
      id: this.props.id || null,
      name: this.state.name,
      description: this.state.description
    })
  }

  changeState = (name) => {
    return (value) => {
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            onChangeText={this.changeState("name")}
            value={this.state.name}
          />
        </Item>
        <Item floatingLabel>
          <Label>Description</Label>
          <Input
            multiline
            onChangeText={this.changeState("description")}
            value={this.state.description}
            style={styles.description}
          />
        </Item>
        <Button
          title="Save Shop"
          onPress={this.submitForm}
        />
      </Form>
    )
  }
}

export default (ShopForm);

const styles = StyleSheet.create({
  description: {
    height: 400,
    textAlignVertical: "top"
  }
});
