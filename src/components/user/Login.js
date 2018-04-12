import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'

import { withApollo } from 'react-apollo'

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
            <CreateUser {...this.props} /> //pass client using withApollo
          ):(
            <LoginUser {...this.props} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default withApollo(Login);
