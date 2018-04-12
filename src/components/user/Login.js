import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'

import CreateUser from './CreateUser'
import LoginUser from './LoginUser'

class Login extends React.Component{
  state = {
    register: true
  }

  switchState = () => {
    this.setState({
      register: !this.state.register
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.register?(
            <CreateUser />
          ):(
            <LoginUser />
          )
        }
        <Button
          onPress={this.switchState}
          title={this.state.register?"Login":"Register"}
        />
      </View>
    )
  }
}

export default (Login);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
