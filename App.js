import React from 'react';
import { ApolloProvider } from 'react-apollo' //like redux
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Home from './src/components/Home'

const client = new ApolloClient({
  //Connect to link GraphQL
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjfvzsr9d588v0135jb53yb5p"
  }),
  cache: new InMemoryCache()
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App
