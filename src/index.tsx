import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  Observable,
  HttpLink,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { getAccessToken, setAccessToken } from "./accessToken";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwt_decode from "jwt-decode";
import {
  currentEventIdVar,
  currentEventVar,
  currentTabVar,
  currentStackVar,
  currentAthleteId,
  currentWorkoutId,
  currentSessionId,
  currentAssessmentId,
} from "./graphql/cache";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface DecodedToken {
  user: number;
  iat: number;
  exp: number;
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // event: {
        //   read(_, { args, toReference }) {
        //     return toReference(
        //       __typename: "Events",
        //       id: args?.id,
        //     });
        //   },
        // },

        currentAssessmentId: {
          read() {
            return currentAssessmentId();
          },
        },
        currentSessionId: {
          read() {
            return currentSessionId();
          },
        },
        currentEventId: {
          read() {
            return currentEventIdVar();
          },
        },
        currentWorkout: {
          read() {
            return currentWorkoutId();
          },
        },
        currentAthleteId: {
          read() {
            return currentAthleteId();
          },
        },
        currentEvent: {
          read() {
            return currentEventVar();
          },
        },
        currentStack: {
          read() {
            return currentStackVar();
          },
        },
        currentTab: {
          read() {
            return currentTabVar();
          },
        },
      },
    },
  },
});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const accessToken = getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

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
          const { exp } = jwt_decode<DecodedToken>(token);
          if (Date.now() >= exp * 1000) {
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
    // onError((ev) => {
    //   console.log(ev)
    // }),
    requestLink,
    new HttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
    }),
  ]),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
