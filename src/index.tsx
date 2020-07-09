/**
 |----------------------------------------------------------
 | Importing Dependencies & Rendering React Root Component!!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |----------------------------------------------------------
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

/**
 * This is a creation of instance of Apollo client which helps us to make an api call to graphql server and cache results.
 *
 * @param object value - Instance of Inmemory Cache object and HttpLink passing base API URL of Graphql server
 * @return Return a client instance with graphql server connectivity
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.blocktap.io/graphql",
  }),
});

/**
 * Rendering app component and wrapping routing and apollo client instance passing through provider.
 */
ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client = { client }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
