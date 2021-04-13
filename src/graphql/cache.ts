import { gql, makeVar } from "@apollo/client";

export const currentEventIdVar = makeVar(0);

export const GET_CURRENT_EVENT = gql`
  query GetCurrentEvent {
    currentEvent @client
  }
`;
