import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Shop from './Shop'
import Shops from './Shops'
import navStyles from '../styles/navStyles'

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  goToDirectoryList = () => {
    this.props.navigation.navigate("DirectoryList")
  }

  render() {
    return (
      <View style={styles.container}>
        <Shops {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Home
