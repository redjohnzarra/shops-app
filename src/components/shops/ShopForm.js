import React from 'react'
import {
  View, Text, TextInput, Button, StyleSheet
} from 'react-native'

class ShopForm extends React.Component{
  state = {
    name: '',
    description: ''
  }

  submitForm = () => {
    this.props.onSubmit({
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
      <View>
        <TextInput
          onChangeText={this.changeState("name")}
          value={this.state.name}
          style={styles.name}
        />
        <TextInput
          onChangeText={this.changeState("description")}
          value={this.state.description}
          style={styles.description}
        />
        <Button
          title="Save Shop"
          onPress={this.submitForm}
        />
      </View>
    )
  }
}

export default (ShopForm);

const styles = StyleSheet.create({
  name: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1
  },
  description: {
    height: 400,
    borderColor: '#333',
    borderWidth: 1,
    textAlignVertical: "top"
  }
});
