import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Shop from './shops/Shop'
import Shops from './shops/Shops'
import navStyles from '../styles/navStyles'

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  newShop = () => {
    this.props.navigation.navigate("NewShop")
  }

  render() {
    return (
      <View style={styles.container}>
        <Shops {...this.props} />
        <TouchableHighlight style={styles.newShop} onPress={this.newShop}>
          <Text style={styles.newShopText}>New Shop +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  newShop: {
    backgroundColor: '#82D8D8',
    padding: 20
  },
  newShopText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Home
