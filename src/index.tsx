import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@ionic/react/css/core.css';
import { relayStylePagination } from '@apollo/client/utilities';
import { CssBaseline } from "@mui/material";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postsWithRelay: relayStylePagination(),
      }
    }
  }
})

const client = new ApolloClient({
  uri: "https://api.szlikeyou.com/graphql",
  cache,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <App />
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
