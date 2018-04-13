import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Fab, Icon } from 'native-base'

import Shop from './shops/Shop'
import Shops from './shops/Shops'
import navStyles from '../styles/navStyles'

import {signOut} from '../utils/loginUtils'

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  newShop = () => {
    this.props.navigation.navigate("UpsertShop")
  }

  render() {
    return (
      <View style={styles.container}>
        <Shops {...this.props} />
        <Button
          onPress={() => {
            signOut()
            this.props.client.resetStore()
          }}
          title="Logout"
        />
        <Fab
          style={styles.newShop}
          onPress={this.newShop}
        >
          <Icon name="add" />
        </Fab>
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
    backgroundColor: '#82D8D8'
  },
  newShopText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Home
