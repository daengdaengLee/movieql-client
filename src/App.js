import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Hello MovieQL Client
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
