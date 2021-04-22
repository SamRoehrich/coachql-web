import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { getAccessToken, setAccessToken } from "./accessToken";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwt_decode, { JwtPayload } from "jwt-decode";
import {
  currentEventIdVar,
  currentEventVar,
  currentTab,
} from "./graphql/cache";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentEventId: {
          read() {
            return currentEventIdVar();
          },
        },
        currentEvent: {
          read() {
            return currentEventVar();
          },
        },
        currentTab: {
          read() {
            return currentTab();
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAccessToken();
  operation.setContext({
    headers: {
      authorization: "bearer " + token,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();

        if (!token) {
          return true;
        }

        try {
          const { exp } = jwt_decode<JwtPayload>(token);
          if (Date.now() >= exp! * 1000) {
            return false;
          } else {
            return true;
          }
        } catch {
          return false;
        }
      },
      fetchAccessToken: () => {
        return fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include",
        });
      },
      handleFetch: (accessToken) => {
        setAccessToken(accessToken);
      },
      handleError: (err) => {
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
      },
    }),
    authMiddleware,
    httpLink,
  ]),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
