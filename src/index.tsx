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
import { BrowserRouter } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });


if(window.history.scrollRestoration) {
  window.history.scrollRestoration = 'auto';
  console.error('设置自动恢复')
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postsWithRelay: relayStylePagination(),
      }
    }
  }
})

const networkUrl = window.localStorage.getItem('network');

const client = new ApolloClient({
  uri: networkUrl ?? "https://api.szlikeyou.com/graphql",
  cache,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
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
