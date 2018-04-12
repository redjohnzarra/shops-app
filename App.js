import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { ApolloProvider } from 'react-apollo' //like redux
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import navStyles from './src/styles/navStyles'

import DirectoryList from './src/components/DirectoryList'
import Shops from './src/components/Shops'

const client = new ApolloClient({
  //Connect to link GraphQL
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjfvzsr9d588v0135jb53yb5p"
  }),
  cache: new InMemoryCache()
})

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  goToDirectoryList = () => {
    this.props.navigation.navigate("DirectoryList")
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Shops />
          <Button
            onPress={this.goToDirectoryList}
            title="Go to Directory List"
          />
        </View>
      </ApolloProvider>
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

export default StackNavigator({
  Home: {
    screen: App
  },
  DirectoryList: {
    screen: DirectoryList
  }
})
