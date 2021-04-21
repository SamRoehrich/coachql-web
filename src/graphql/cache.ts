import { gql, makeVar } from "@apollo/client";

export const currentEventIdVar = makeVar(0);
export const currentEventVar = makeVar({});

export const GET_CURRENT_EVENT_ID = gql`
  query GetCurrentEventId {
    currentEventId @client
  }
`;

export const GET_CURRENT_EVENT = gql`
  query GetCurrentEvent {
    currentEvent @client
  }
`;
