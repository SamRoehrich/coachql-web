import { gql, makeVar } from "@apollo/client";

export const currentEventIdVar = makeVar(0);
export const currentEventVar = makeVar({});
export const currentTabVar = makeVar("stacks");
export const currentStackVar = makeVar({});
export const currentAthleteId = makeVar<number | null>(null);
export const currentWorkoutId = makeVar<number | null>(null);

export const GET_CURRENT_WORKOUT_ID = gql`
  query GetCurrentWorkoutId {
    currentWorkoutId @client
  }
`;

export const GET_CURRENT_EVENT_ID = gql`
  query GetCurrentEventId {
    currentEventId @client
  }
`;

export const GET_ATHLETE_ID = gql`
  query GetCurrentAthleteId {
    currentAthleteId @client
  }
`;

export const GET_CURRENT_EVENT = gql`
  query GetCurrentEvent {
    currentEvent @client
  }
`;

export const GET_CURRENT_TAB = gql`
  query GetCurrentTab {
    currentTab @client
  }
`;

export const GET_CURRENT_STACK = gql`
  query GetCurrentStack {
    currentStack @client
  }
`;
