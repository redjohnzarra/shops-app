import React from 'react';
import { ApolloProvider } from 'react-apollo' //like redux
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

import Routes from './src/routes'

import { getToken } from './src/utils/loginUtils'

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken()
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}`: null
    }
  }
})

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjfvzsr9d588v0135jb53yb5p"
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  //Connect to link GraphQL
  link,
  cache: new InMemoryCache()
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App
