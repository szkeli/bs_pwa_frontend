import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import '@ionic/react/css/core.css';
import { relayStylePagination } from '@apollo/client/utilities';
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const cache = new InMemoryCache({
  typePolicies: {
    Post: {
      fields: {
        votesWithRelay: relayStylePagination(),
      }
    },
    University: {
      fields: {
        users: relayStylePagination(),
        posts: relayStylePagination(),
      }
    },
    Query: {
      fields: {
        postsWithRelay: relayStylePagination(),
        usersWithRelay: relayStylePagination(),
        universities: relayStylePagination(),
      }
    }
  }
})

const networkUrl = window.localStorage.getItem('network');

const httpLink = createHttpLink({
  uri: networkUrl ?? "https://api.szlikeyou.com/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
