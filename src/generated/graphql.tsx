import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Assessment = {
  __typename?: 'Assessment';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  organization: Organization;
  dataPoints: Scalars['String'];
  testMethod: Scalars['String'];
  assessmentType: Scalars['String'];
};

export type Athlete = {
  __typename?: 'Athlete';
  id: Scalars['Int'];
  gender: Gender;
  user: User;
  parentEmail: Scalars['String'];
  birthYear: Scalars['Int'];
  organization: Organization;
  team: Team;
  metricsRequired: Scalars['Boolean'];
  createWorkouts: Scalars['Boolean'];
  trainingPlan: TrainingPlan;
  sessions: Array<Session>;
};

export type Boulder = {
  __typename?: 'Boulder';
  id: Scalars['Int'];
  scoreKeeper: User;
  boulderNumber: Scalars['Int'];
  stack: Stack;
};

/** Age Catagory */
export enum Catagory {
  Jr = 'JR',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export type Coach = {
  __typename?: 'Coach';
  id: Scalars['Int'];
  user?: Maybe<User>;
  birthYear: Scalars['Int'];
  organization: Organization;
  team: Team;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  name: Scalars['String'];
  location: Scalars['String'];
  visible: Scalars['Boolean'];
  startDate: Scalars['String'];
  started: Scalars['Boolean'];
  numBoulders: Scalars['Int'];
  creator: User;
  athletes?: Maybe<Array<Athlete>>;
  stacks?: Maybe<Array<Stack>>;
  runningOrder?: Maybe<RunningOrder>;
};

/** Athlete Gender */
export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  activateAthlete: Scalars['Boolean'];
  activateUser: Scalars['Boolean'];
  login: LoginResponse;
  createRunningOrder: Scalars['Boolean'];
  editRunningOrder: Scalars['Boolean'];
  resetRunningOrder: Scalars['Boolean'];
  createEvent: Scalars['Boolean'];
  createTeam: Scalars['Boolean'];
  deleteTeam: Scalars['Boolean'];
  createOrganization: Scalars['Boolean'];
  addAthleteToTeam: Scalars['Boolean'];
  deleteAthleteProfile: Scalars['Boolean'];
  updateAthleteBirthYear: Scalars['Boolean'];
  createAthleteProfile: Scalars['Boolean'];
  addAthleteToEvent: Scalars['Boolean'];
  createBoulder: Scalars['Boolean'];
  createWorkout: Scalars['Boolean'];
  editWorkout: Scalars['Boolean'];
  updateWorkoutDescription: Scalars['Boolean'];
  updateWorkoutName: Scalars['Boolean'];
  updateWorkoutType: Scalars['Boolean'];
  updateWorkoutEquiptment: Scalars['Boolean'];
  updateWorkoutSets: Scalars['Boolean'];
  deleteWorkout: Scalars['Boolean'];
  createCoachProfile: Scalars['Boolean'];
  logSession: Scalars['Boolean'];
  createAssessment: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationActivateAthleteArgs = {
  userId: Scalars['Float'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateRunningOrderArgs = {
  eventId: Scalars['String'];
};


export type MutationEditRunningOrderArgs = {
  runningOrderId: Scalars['String'];
  third: Array<Scalars['Int']>;
  second: Array<Scalars['Int']>;
  first: Array<Scalars['Int']>;
  unordered: Array<Scalars['Int']>;
};


export type MutationResetRunningOrderArgs = {
  roId: Scalars['String'];
  eventId: Scalars['String'];
};


export type MutationCreateEventArgs = {
  numBoulders: Scalars['Float'];
  startDate: Scalars['String'];
  visible: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateTeamArgs = {
  orgId: Scalars['Float'];
  teamName: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  teamId: Scalars['Float'];
};


export type MutationCreateOrganizationArgs = {
  name: Scalars['String'];
};


export type MutationAddAthleteToTeamArgs = {
  teamId: Scalars['Float'];
  athleteId: Scalars['Float'];
};


export type MutationDeleteAthleteProfileArgs = {
  athleteId: Scalars['Float'];
};


export type MutationUpdateAthleteBirthYearArgs = {
  birthYear: Scalars['Float'];
  athleteId: Scalars['Float'];
};


export type MutationCreateAthleteProfileArgs = {
  createWorkouts: Scalars['Boolean'];
  metricsRequired: Scalars['Boolean'];
  teamId: Scalars['Float'];
  birthYear: Scalars['Float'];
  parentEmail: Scalars['String'];
  email: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
};


export type MutationAddAthleteToEventArgs = {
  eventId: Scalars['String'];
  athleteId: Scalars['String'];
};


export type MutationCreateBoulderArgs = {
  boulderNumber: Scalars['Float'];
  stackId: Scalars['Float'];
};


export type MutationCreateWorkoutArgs = {
  notifications: Scalars['Boolean'];
  recordClimbs: Scalars['Boolean'];
  numSets: Scalars['Float'];
  equiptment: Scalars['String'];
  workoutType: Scalars['String'];
  description: Scalars['String'];
  sets: Scalars['String'];
  name: Scalars['String'];
};


export type MutationEditWorkoutArgs = {
  id: Scalars['Float'];
  notifications: Scalars['Boolean'];
  recordClimbs: Scalars['Boolean'];
  numSets: Scalars['Float'];
  equiptment: Scalars['String'];
  workoutType: Scalars['String'];
  description: Scalars['String'];
  sets: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateWorkoutDescriptionArgs = {
  description: Scalars['String'];
  workoutId: Scalars['Float'];
};


export type MutationUpdateWorkoutNameArgs = {
  name: Scalars['String'];
  workoutId: Scalars['Float'];
};


export type MutationUpdateWorkoutTypeArgs = {
  workoutType: Scalars['String'];
  workoutId: Scalars['Float'];
};


export type MutationUpdateWorkoutEquiptmentArgs = {
  equiptment: Scalars['String'];
  workoutId: Scalars['Float'];
};


export type MutationUpdateWorkoutSetsArgs = {
  sets: Scalars['String'];
  workoutId: Scalars['Float'];
};


export type MutationDeleteWorkoutArgs = {
  workoutId: Scalars['Float'];
};


export type MutationCreateCoachProfileArgs = {
  birthYear: Scalars['Float'];
  orgId: Scalars['Float'];
};


export type MutationLogSessionArgs = {
  notes: Scalars['String'];
  rpe: Scalars['Float'];
  percentCompleted: Scalars['Float'];
  workoutId: Scalars['Float'];
};


export type MutationCreateAssessmentArgs = {
  type: Scalars['String'];
  tools: Scalars['String'];
  dataPoints: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  teams: Array<Team>;
  workouts: Array<Workout>;
  athletes: Array<Athlete>;
  coaches: Array<Coach>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  users: Array<User>;
  me?: Maybe<User>;
  bye: Scalars['String'];
  getRunningOrder: RunningOrder;
  events: Array<Event>;
  event: Event;
  getAuthenticatedEvents: Array<Event>;
  teams: Array<Team>;
  getTeamByCoachId: Team;
  getOrganizations: Array<Organization>;
  getAthletesInOrg: Array<Athlete>;
  getWorkoutsInOrg: Array<Workout>;
  getTeamsInOrg: Array<Team>;
  getOrganization: Organization;
  athletes: Array<Athlete>;
  getAthleteById: Athlete;
  getCompletedSessionsForAthlete: Array<Session>;
  getStacks: Array<Stack>;
  getBoulders: Array<Boulder>;
  getBouldersForEvent: Array<Boulder>;
  getBoulder: Boulder;
  getWorkout: Workout;
  getWorkoutsForTeam: Array<Workout>;
  getCoaches: Array<Coach>;
  getAssessments: Array<Assessment>;
};


export type QueryGetRunningOrderArgs = {
  eventId: Scalars['String'];
};


export type QueryEventArgs = {
  eventId: Scalars['String'];
};


export type QueryGetTeamByCoachIdArgs = {
  coachId: Scalars['String'];
};


export type QueryGetAthleteByIdArgs = {
  athleteId: Scalars['Float'];
};


export type QueryGetCompletedSessionsForAthleteArgs = {
  athleteId: Scalars['String'];
};


export type QueryGetStacksArgs = {
  eventId: Scalars['String'];
};


export type QueryGetBouldersForEventArgs = {
  eventId: Scalars['String'];
};


export type QueryGetBoulderArgs = {
  boulderId: Scalars['Float'];
};


export type QueryGetWorkoutArgs = {
  workoutId: Scalars['Float'];
};


export type QueryGetWorkoutsForTeamArgs = {
  teamId: Scalars['String'];
};

export type RunningOrder = {
  __typename?: 'RunningOrder';
  id: Scalars['Int'];
  unordered: Array<Stack>;
  first: Array<Stack>;
  second: Array<Stack>;
  third: Array<Stack>;
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['Int'];
  workout: Workout;
  notes: Scalars['String'];
  rpe: Scalars['Int'];
  percentCompleted: Scalars['Int'];
  date: Scalars['String'];
};

export type Stack = {
  __typename?: 'Stack';
  id: Scalars['Int'];
  gender: Gender;
  catagory: Catagory;
  event: Event;
  athletes: Array<Athlete>;
  boulders: Array<Boulder>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  teamName: Scalars['String'];
  athletes: Array<Athlete>;
  organization: Organization;
};

export type TrainingPlan = {
  __typename?: 'TrainingPlan';
  id: Scalars['Int'];
  org: Organization;
  description: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  numWeeks: Scalars['Int'];
  plan: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  active: Scalars['Boolean'];
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['Int'];
  name: Scalars['String'];
  numSets: Scalars['Int'];
  description: Scalars['String'];
  workoutType: Scalars['String'];
  sets: Scalars['String'];
  equiptment: Scalars['String'];
  organization: Organization;
  recordClimbs: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
};

export type CreateAssessmentMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  tools: Scalars['String'];
  dataPoints: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateAssessmentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createAssessment'>
);

export type GetAthleteQueryVariables = Exact<{
  AthleteId: Scalars['Float'];
}>;


export type GetAthleteQuery = (
  { __typename?: 'Query' }
  & { getAthleteById: (
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'birthYear' | 'parentEmail'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'active' | 'lastName' | 'firstName' | 'email'>
    ) }
  ) }
);

export type CreateAthleteProfileMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  parentEmail: Scalars['String'];
  birthYear: Scalars['Float'];
  teamId: Scalars['Float'];
  metricsRequired: Scalars['Boolean'];
  createWorkouts: Scalars['Boolean'];
}>;


export type CreateAthleteProfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createAthleteProfile'>
);

export type GetBouldersInEventQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type GetBouldersInEventQuery = (
  { __typename?: 'Query' }
  & { getBouldersForEvent: Array<(
    { __typename?: 'Boulder' }
    & Pick<Boulder, 'id' | 'boulderNumber'>
  )> }
);

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'bye'>
);

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'name' | 'location' | 'id' | 'startDate' | 'numBoulders'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  )> }
);

export type CreateEventMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  startDate: Scalars['String'];
  visible: Scalars['Boolean'];
  numBoulders: Scalars['Float'];
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createEvent'>
);

export type GetAuthenticatedEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthenticatedEventsQuery = (
  { __typename?: 'Query' }
  & { getAuthenticatedEvents: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'name' | 'location' | 'visible' | 'started' | 'startDate' | 'numBoulders'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'lastName' | 'firstName'>
    ), athletes?: Maybe<Array<(
      { __typename?: 'Athlete' }
      & Pick<Athlete, 'gender' | 'id' | 'birthYear'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'lastName' | 'firstName'>
      ) }
    )>>, stacks?: Maybe<Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
      & { athletes: Array<(
        { __typename?: 'Athlete' }
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'firstName' | 'lastName' | 'id'>
        ) }
      )> }
    )>> }
  )> }
);

export type GetEventQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type GetEventQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'name' | 'startDate' | 'visible' | 'location' | 'numBoulders'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'lastName' | 'firstName' | 'id' | 'email'>
    ), runningOrder?: Maybe<(
      { __typename?: 'RunningOrder' }
      & Pick<RunningOrder, 'id'>
      & { unordered: Array<(
        { __typename?: 'Stack' }
        & Pick<Stack, 'id' | 'gender' | 'catagory'>
      )>, first: Array<(
        { __typename?: 'Stack' }
        & Pick<Stack, 'id' | 'gender' | 'catagory'>
      )>, second: Array<(
        { __typename?: 'Stack' }
        & Pick<Stack, 'id' | 'gender' | 'catagory'>
      )>, third: Array<(
        { __typename?: 'Stack' }
        & Pick<Stack, 'id' | 'gender' | 'catagory'>
      )> }
    )>, stacks?: Maybe<Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
      & { boulders: Array<(
        { __typename?: 'Boulder' }
        & Pick<Boulder, 'id' | 'boulderNumber'>
      )> }
    )>>, athletes?: Maybe<Array<(
      { __typename?: 'Athlete' }
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'lastName' | 'firstName'>
      ) }
    )>> }
  ) }
);

export type RunningOrderFragment = (
  { __typename?: 'Event' }
  & { runningOrder?: Maybe<(
    { __typename?: 'RunningOrder' }
    & Pick<RunningOrder, 'id'>
    & { unordered: Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
    )>, first: Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
    )>, second: Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
    )>, third: Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'gender' | 'catagory'>
    )> }
  )> }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type GetOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrgQuery = (
  { __typename?: 'Query' }
  & { getOrganization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'name'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'lastName'>
    ), teams: Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'teamName'>
    )>, workouts: Array<(
      { __typename?: 'Workout' }
      & Pick<Workout, 'id' | 'name'>
    )>, athletes: Array<(
      { __typename?: 'Athlete' }
      & Pick<Athlete, 'id' | 'birthYear'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName'>
      ) }
    )> }
  ) }
);

export type GetAthletesInOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAthletesInOrgQuery = (
  { __typename?: 'Query' }
  & { getAthletesInOrg: Array<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id'>
    & { team: (
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'lastName' | 'firstName'>
    ) }
  )> }
);

export type GetTeamsInOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsInOrgQuery = (
  { __typename?: 'Query' }
  & { getTeamsInOrg: Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'teamName'>
  )> }
);

export type EditRunningOrderMutationVariables = Exact<{
  runningOrderId: Scalars['String'];
  unordered: Array<Scalars['Int']> | Scalars['Int'];
  first: Array<Scalars['Int']> | Scalars['Int'];
  second: Array<Scalars['Int']> | Scalars['Int'];
  third: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type EditRunningOrderMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editRunningOrder'>
);

export type GetStacksForEventQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type GetStacksForEventQuery = (
  { __typename?: 'Query' }
  & { getStacks: Array<(
    { __typename?: 'Stack' }
    & Pick<Stack, 'id' | 'gender' | 'catagory'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
  )> }
);

export type CreateWorkoutMutationVariables = Exact<{
  description: Scalars['String'];
  sets: Scalars['String'];
  numSets: Scalars['Float'];
  name: Scalars['String'];
  equiptment: Scalars['String'];
  workoutType: Scalars['String'];
  recordClimbs: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
}>;


export type CreateWorkoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createWorkout'>
);

export type EditWorkoutMutationVariables = Exact<{
  description: Scalars['String'];
  sets: Scalars['String'];
  numSets: Scalars['Float'];
  name: Scalars['String'];
  equiptment: Scalars['String'];
  workoutType: Scalars['String'];
  recordClimbs: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
  id: Scalars['Float'];
}>;


export type EditWorkoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editWorkout'>
);

export type DeleteWorkoutMutationVariables = Exact<{
  workoutId: Scalars['Float'];
}>;


export type DeleteWorkoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteWorkout'>
);

export type GetWorkoutQueryVariables = Exact<{
  workoutId: Scalars['Float'];
}>;


export type GetWorkoutQuery = (
  { __typename?: 'Query' }
  & { getWorkout: (
    { __typename?: 'Workout' }
    & Pick<Workout, 'name' | 'description' | 'numSets' | 'workoutType' | 'sets' | 'id' | 'equiptment' | 'recordClimbs' | 'notifications'>
  ) }
);

export type GetWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkoutsQuery = (
  { __typename?: 'Query' }
  & { getWorkoutsInOrg: Array<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'name' | 'description' | 'numSets' | 'workoutType' | 'sets' | 'id' | 'equiptment' | 'recordClimbs' | 'notifications'>
  )> }
);

export type GetWorkoutsForTeamQueryVariables = Exact<{
  teamId: Scalars['String'];
}>;


export type GetWorkoutsForTeamQuery = (
  { __typename?: 'Query' }
  & { getWorkoutsForTeam: Array<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'id' | 'workoutType' | 'name'>
  )> }
);

export type GetSessionsForAthleteQueryVariables = Exact<{
  athleteId: Scalars['String'];
}>;


export type GetSessionsForAthleteQuery = (
  { __typename?: 'Query' }
  & { getCompletedSessionsForAthlete: Array<(
    { __typename?: 'Session' }
    & Pick<Session, 'id' | 'date' | 'percentCompleted' | 'rpe'>
    & { workout: (
      { __typename?: 'Workout' }
      & Pick<Workout, 'name' | 'workoutType'>
    ) }
  )> }
);

export const RunningOrderFragmentDoc = gql`
    fragment runningOrder on Event {
  runningOrder {
    id
    unordered {
      id
      gender
      catagory
    }
    first {
      id
      gender
      catagory
    }
    second {
      id
      gender
      catagory
    }
    third {
      id
      gender
      catagory
    }
  }
}
    `;
export const CreateAssessmentDocument = gql`
    mutation CreateAssessment($name: String!, $description: String!, $tools: String!, $dataPoints: String!, $type: String!) {
  createAssessment(
    name: $name
    description: $description
    tools: $tools
    dataPoints: $dataPoints
    type: $type
  )
}
    `;
export type CreateAssessmentMutationFn = Apollo.MutationFunction<CreateAssessmentMutation, CreateAssessmentMutationVariables>;

/**
 * __useCreateAssessmentMutation__
 *
 * To run a mutation, you first call `useCreateAssessmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssessmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssessmentMutation, { data, loading, error }] = useCreateAssessmentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      tools: // value for 'tools'
 *      dataPoints: // value for 'dataPoints'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateAssessmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssessmentMutation, CreateAssessmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssessmentMutation, CreateAssessmentMutationVariables>(CreateAssessmentDocument, options);
      }
export type CreateAssessmentMutationHookResult = ReturnType<typeof useCreateAssessmentMutation>;
export type CreateAssessmentMutationResult = Apollo.MutationResult<CreateAssessmentMutation>;
export type CreateAssessmentMutationOptions = Apollo.BaseMutationOptions<CreateAssessmentMutation, CreateAssessmentMutationVariables>;
export const GetAthleteDocument = gql`
    query GetAthlete($AthleteId: Float!) {
  getAthleteById(athleteId: $AthleteId) {
    id
    birthYear
    parentEmail
    user {
      id
      active
      lastName
      firstName
      email
    }
  }
}
    `;

/**
 * __useGetAthleteQuery__
 *
 * To run a query within a React component, call `useGetAthleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAthleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAthleteQuery({
 *   variables: {
 *      AthleteId: // value for 'AthleteId'
 *   },
 * });
 */
export function useGetAthleteQuery(baseOptions: Apollo.QueryHookOptions<GetAthleteQuery, GetAthleteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAthleteQuery, GetAthleteQueryVariables>(GetAthleteDocument, options);
      }
export function useGetAthleteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAthleteQuery, GetAthleteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAthleteQuery, GetAthleteQueryVariables>(GetAthleteDocument, options);
        }
export type GetAthleteQueryHookResult = ReturnType<typeof useGetAthleteQuery>;
export type GetAthleteLazyQueryHookResult = ReturnType<typeof useGetAthleteLazyQuery>;
export type GetAthleteQueryResult = Apollo.QueryResult<GetAthleteQuery, GetAthleteQueryVariables>;
export const CreateAthleteProfileDocument = gql`
    mutation CreateAthleteProfile($firstName: String!, $lastName: String!, $email: String!, $parentEmail: String!, $birthYear: Float!, $teamId: Float!, $metricsRequired: Boolean!, $createWorkouts: Boolean!) {
  createAthleteProfile(
    firstName: $firstName
    lastName: $lastName
    email: $email
    parentEmail: $parentEmail
    birthYear: $birthYear
    teamId: $teamId
    metricsRequired: $metricsRequired
    createWorkouts: $createWorkouts
  )
}
    `;
export type CreateAthleteProfileMutationFn = Apollo.MutationFunction<CreateAthleteProfileMutation, CreateAthleteProfileMutationVariables>;

/**
 * __useCreateAthleteProfileMutation__
 *
 * To run a mutation, you first call `useCreateAthleteProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAthleteProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAthleteProfileMutation, { data, loading, error }] = useCreateAthleteProfileMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      parentEmail: // value for 'parentEmail'
 *      birthYear: // value for 'birthYear'
 *      teamId: // value for 'teamId'
 *      metricsRequired: // value for 'metricsRequired'
 *      createWorkouts: // value for 'createWorkouts'
 *   },
 * });
 */
export function useCreateAthleteProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateAthleteProfileMutation, CreateAthleteProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAthleteProfileMutation, CreateAthleteProfileMutationVariables>(CreateAthleteProfileDocument, options);
      }
export type CreateAthleteProfileMutationHookResult = ReturnType<typeof useCreateAthleteProfileMutation>;
export type CreateAthleteProfileMutationResult = Apollo.MutationResult<CreateAthleteProfileMutation>;
export type CreateAthleteProfileMutationOptions = Apollo.BaseMutationOptions<CreateAthleteProfileMutation, CreateAthleteProfileMutationVariables>;
export const GetBouldersInEventDocument = gql`
    query GetBouldersInEvent($eventId: String!) {
  getBouldersForEvent(eventId: $eventId) {
    id
    boulderNumber
  }
}
    `;

/**
 * __useGetBouldersInEventQuery__
 *
 * To run a query within a React component, call `useGetBouldersInEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBouldersInEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBouldersInEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetBouldersInEventQuery(baseOptions: Apollo.QueryHookOptions<GetBouldersInEventQuery, GetBouldersInEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBouldersInEventQuery, GetBouldersInEventQueryVariables>(GetBouldersInEventDocument, options);
      }
export function useGetBouldersInEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBouldersInEventQuery, GetBouldersInEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBouldersInEventQuery, GetBouldersInEventQueryVariables>(GetBouldersInEventDocument, options);
        }
export type GetBouldersInEventQueryHookResult = ReturnType<typeof useGetBouldersInEventQuery>;
export type GetBouldersInEventLazyQueryHookResult = ReturnType<typeof useGetBouldersInEventLazyQuery>;
export type GetBouldersInEventQueryResult = Apollo.QueryResult<GetBouldersInEventQuery, GetBouldersInEventQueryVariables>;
export const ByeDocument = gql`
    query Bye {
  bye
}
    `;

/**
 * __useByeQuery__
 *
 * To run a query within a React component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByeQuery({
 *   variables: {
 *   },
 * });
 */
export function useByeQuery(baseOptions?: Apollo.QueryHookOptions<ByeQuery, ByeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
      }
export function useByeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ByeQuery, ByeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
        }
export type ByeQueryHookResult = ReturnType<typeof useByeQuery>;
export type ByeLazyQueryHookResult = ReturnType<typeof useByeLazyQuery>;
export type ByeQueryResult = Apollo.QueryResult<ByeQuery, ByeQueryVariables>;
export const EventsDocument = gql`
    query Events {
  events {
    name
    location
    id
    startDate
    numBoulders
    creator {
      id
      email
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($name: String!, $location: String!, $startDate: String!, $visible: Boolean!, $numBoulders: Float!) {
  createEvent(
    name: $name
    location: $location
    startDate: $startDate
    visible: $visible
    numBoulders: $numBoulders
  )
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      location: // value for 'location'
 *      startDate: // value for 'startDate'
 *      visible: // value for 'visible'
 *      numBoulders: // value for 'numBoulders'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const GetAuthenticatedEventsDocument = gql`
    query GetAuthenticatedEvents {
  getAuthenticatedEvents {
    id
    name
    location
    visible
    started
    startDate
    numBoulders
    creator {
      id
      email
      lastName
      firstName
    }
    athletes {
      gender
      id
      birthYear
      user {
        lastName
        firstName
      }
    }
    stacks {
      id
      gender
      catagory
      athletes {
        user {
          firstName
          lastName
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetAuthenticatedEventsQuery__
 *
 * To run a query within a React component, call `useGetAuthenticatedEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthenticatedEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthenticatedEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthenticatedEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthenticatedEventsQuery, GetAuthenticatedEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthenticatedEventsQuery, GetAuthenticatedEventsQueryVariables>(GetAuthenticatedEventsDocument, options);
      }
export function useGetAuthenticatedEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthenticatedEventsQuery, GetAuthenticatedEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthenticatedEventsQuery, GetAuthenticatedEventsQueryVariables>(GetAuthenticatedEventsDocument, options);
        }
export type GetAuthenticatedEventsQueryHookResult = ReturnType<typeof useGetAuthenticatedEventsQuery>;
export type GetAuthenticatedEventsLazyQueryHookResult = ReturnType<typeof useGetAuthenticatedEventsLazyQuery>;
export type GetAuthenticatedEventsQueryResult = Apollo.QueryResult<GetAuthenticatedEventsQuery, GetAuthenticatedEventsQueryVariables>;
export const GetEventDocument = gql`
    query GetEvent($eventId: String!) {
  event(eventId: $eventId) {
    id
    name
    startDate
    visible
    location
    numBoulders
    creator {
      lastName
      firstName
      id
      email
    }
    runningOrder {
      id
      unordered {
        id
        gender
        catagory
      }
      first {
        id
        gender
        catagory
      }
      second {
        id
        gender
        catagory
      }
      third {
        id
        gender
        catagory
      }
    }
    stacks {
      id
      gender
      catagory
      boulders {
        id
        boulderNumber
      }
    }
    athletes {
      user {
        lastName
        firstName
      }
    }
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
      firstName
      lastName
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetOrgDocument = gql`
    query GetOrg {
  getOrganization {
    id
    name
    owner {
      lastName
    }
    teams {
      id
      teamName
    }
    workouts {
      id
      name
    }
    athletes {
      id
      birthYear
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useGetOrgQuery__
 *
 * To run a query within a React component, call `useGetOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrgQuery(baseOptions?: Apollo.QueryHookOptions<GetOrgQuery, GetOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrgQuery, GetOrgQueryVariables>(GetOrgDocument, options);
      }
export function useGetOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrgQuery, GetOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrgQuery, GetOrgQueryVariables>(GetOrgDocument, options);
        }
export type GetOrgQueryHookResult = ReturnType<typeof useGetOrgQuery>;
export type GetOrgLazyQueryHookResult = ReturnType<typeof useGetOrgLazyQuery>;
export type GetOrgQueryResult = Apollo.QueryResult<GetOrgQuery, GetOrgQueryVariables>;
export const GetAthletesInOrgDocument = gql`
    query GetAthletesInOrg {
  getAthletesInOrg {
    id
    team {
      teamName
    }
    user {
      lastName
      firstName
    }
  }
}
    `;

/**
 * __useGetAthletesInOrgQuery__
 *
 * To run a query within a React component, call `useGetAthletesInOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAthletesInOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAthletesInOrgQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAthletesInOrgQuery(baseOptions?: Apollo.QueryHookOptions<GetAthletesInOrgQuery, GetAthletesInOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAthletesInOrgQuery, GetAthletesInOrgQueryVariables>(GetAthletesInOrgDocument, options);
      }
export function useGetAthletesInOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAthletesInOrgQuery, GetAthletesInOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAthletesInOrgQuery, GetAthletesInOrgQueryVariables>(GetAthletesInOrgDocument, options);
        }
export type GetAthletesInOrgQueryHookResult = ReturnType<typeof useGetAthletesInOrgQuery>;
export type GetAthletesInOrgLazyQueryHookResult = ReturnType<typeof useGetAthletesInOrgLazyQuery>;
export type GetAthletesInOrgQueryResult = Apollo.QueryResult<GetAthletesInOrgQuery, GetAthletesInOrgQueryVariables>;
export const GetTeamsInOrgDocument = gql`
    query GetTeamsInOrg {
  getTeamsInOrg {
    id
    teamName
  }
}
    `;

/**
 * __useGetTeamsInOrgQuery__
 *
 * To run a query within a React component, call `useGetTeamsInOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsInOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsInOrgQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeamsInOrgQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsInOrgQuery, GetTeamsInOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsInOrgQuery, GetTeamsInOrgQueryVariables>(GetTeamsInOrgDocument, options);
      }
export function useGetTeamsInOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsInOrgQuery, GetTeamsInOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsInOrgQuery, GetTeamsInOrgQueryVariables>(GetTeamsInOrgDocument, options);
        }
export type GetTeamsInOrgQueryHookResult = ReturnType<typeof useGetTeamsInOrgQuery>;
export type GetTeamsInOrgLazyQueryHookResult = ReturnType<typeof useGetTeamsInOrgLazyQuery>;
export type GetTeamsInOrgQueryResult = Apollo.QueryResult<GetTeamsInOrgQuery, GetTeamsInOrgQueryVariables>;
export const EditRunningOrderDocument = gql`
    mutation editRunningOrder($runningOrderId: String!, $unordered: [Int!]!, $first: [Int!]!, $second: [Int!]!, $third: [Int!]!) {
  editRunningOrder(
    unordered: $unordered
    third: $third
    second: $second
    first: $first
    runningOrderId: $runningOrderId
  )
}
    `;
export type EditRunningOrderMutationFn = Apollo.MutationFunction<EditRunningOrderMutation, EditRunningOrderMutationVariables>;

/**
 * __useEditRunningOrderMutation__
 *
 * To run a mutation, you first call `useEditRunningOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRunningOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRunningOrderMutation, { data, loading, error }] = useEditRunningOrderMutation({
 *   variables: {
 *      runningOrderId: // value for 'runningOrderId'
 *      unordered: // value for 'unordered'
 *      first: // value for 'first'
 *      second: // value for 'second'
 *      third: // value for 'third'
 *   },
 * });
 */
export function useEditRunningOrderMutation(baseOptions?: Apollo.MutationHookOptions<EditRunningOrderMutation, EditRunningOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRunningOrderMutation, EditRunningOrderMutationVariables>(EditRunningOrderDocument, options);
      }
export type EditRunningOrderMutationHookResult = ReturnType<typeof useEditRunningOrderMutation>;
export type EditRunningOrderMutationResult = Apollo.MutationResult<EditRunningOrderMutation>;
export type EditRunningOrderMutationOptions = Apollo.BaseMutationOptions<EditRunningOrderMutation, EditRunningOrderMutationVariables>;
export const GetStacksForEventDocument = gql`
    query GetStacksForEvent($eventId: String!) {
  getStacks(eventId: $eventId) {
    id
    gender
    catagory
  }
}
    `;

/**
 * __useGetStacksForEventQuery__
 *
 * To run a query within a React component, call `useGetStacksForEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStacksForEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStacksForEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetStacksForEventQuery(baseOptions: Apollo.QueryHookOptions<GetStacksForEventQuery, GetStacksForEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStacksForEventQuery, GetStacksForEventQueryVariables>(GetStacksForEventDocument, options);
      }
export function useGetStacksForEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStacksForEventQuery, GetStacksForEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStacksForEventQuery, GetStacksForEventQueryVariables>(GetStacksForEventDocument, options);
        }
export type GetStacksForEventQueryHookResult = ReturnType<typeof useGetStacksForEventQuery>;
export type GetStacksForEventLazyQueryHookResult = ReturnType<typeof useGetStacksForEventLazyQuery>;
export type GetStacksForEventQueryResult = Apollo.QueryResult<GetStacksForEventQuery, GetStacksForEventQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateWorkoutDocument = gql`
    mutation createWorkout($description: String!, $sets: String!, $numSets: Float!, $name: String!, $equiptment: String!, $workoutType: String!, $recordClimbs: Boolean!, $notifications: Boolean!) {
  createWorkout(
    name: $name
    numSets: $numSets
    equiptment: $equiptment
    workoutType: $workoutType
    description: $description
    sets: $sets
    recordClimbs: $recordClimbs
    notifications: $notifications
  )
}
    `;
export type CreateWorkoutMutationFn = Apollo.MutationFunction<CreateWorkoutMutation, CreateWorkoutMutationVariables>;

/**
 * __useCreateWorkoutMutation__
 *
 * To run a mutation, you first call `useCreateWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkoutMutation, { data, loading, error }] = useCreateWorkoutMutation({
 *   variables: {
 *      description: // value for 'description'
 *      sets: // value for 'sets'
 *      numSets: // value for 'numSets'
 *      name: // value for 'name'
 *      equiptment: // value for 'equiptment'
 *      workoutType: // value for 'workoutType'
 *      recordClimbs: // value for 'recordClimbs'
 *      notifications: // value for 'notifications'
 *   },
 * });
 */
export function useCreateWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(CreateWorkoutDocument, options);
      }
export type CreateWorkoutMutationHookResult = ReturnType<typeof useCreateWorkoutMutation>;
export type CreateWorkoutMutationResult = Apollo.MutationResult<CreateWorkoutMutation>;
export type CreateWorkoutMutationOptions = Apollo.BaseMutationOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>;
export const EditWorkoutDocument = gql`
    mutation editWorkout($description: String!, $sets: String!, $numSets: Float!, $name: String!, $equiptment: String!, $workoutType: String!, $recordClimbs: Boolean!, $notifications: Boolean!, $id: Float!) {
  editWorkout(
    name: $name
    numSets: $numSets
    equiptment: $equiptment
    workoutType: $workoutType
    description: $description
    sets: $sets
    recordClimbs: $recordClimbs
    notifications: $notifications
    id: $id
  )
}
    `;
export type EditWorkoutMutationFn = Apollo.MutationFunction<EditWorkoutMutation, EditWorkoutMutationVariables>;

/**
 * __useEditWorkoutMutation__
 *
 * To run a mutation, you first call `useEditWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editWorkoutMutation, { data, loading, error }] = useEditWorkoutMutation({
 *   variables: {
 *      description: // value for 'description'
 *      sets: // value for 'sets'
 *      numSets: // value for 'numSets'
 *      name: // value for 'name'
 *      equiptment: // value for 'equiptment'
 *      workoutType: // value for 'workoutType'
 *      recordClimbs: // value for 'recordClimbs'
 *      notifications: // value for 'notifications'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<EditWorkoutMutation, EditWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditWorkoutMutation, EditWorkoutMutationVariables>(EditWorkoutDocument, options);
      }
export type EditWorkoutMutationHookResult = ReturnType<typeof useEditWorkoutMutation>;
export type EditWorkoutMutationResult = Apollo.MutationResult<EditWorkoutMutation>;
export type EditWorkoutMutationOptions = Apollo.BaseMutationOptions<EditWorkoutMutation, EditWorkoutMutationVariables>;
export const DeleteWorkoutDocument = gql`
    mutation DeleteWorkout($workoutId: Float!) {
  deleteWorkout(workoutId: $workoutId)
}
    `;
export type DeleteWorkoutMutationFn = Apollo.MutationFunction<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>;

/**
 * __useDeleteWorkoutMutation__
 *
 * To run a mutation, you first call `useDeleteWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkoutMutation, { data, loading, error }] = useDeleteWorkoutMutation({
 *   variables: {
 *      workoutId: // value for 'workoutId'
 *   },
 * });
 */
export function useDeleteWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>(DeleteWorkoutDocument, options);
      }
export type DeleteWorkoutMutationHookResult = ReturnType<typeof useDeleteWorkoutMutation>;
export type DeleteWorkoutMutationResult = Apollo.MutationResult<DeleteWorkoutMutation>;
export type DeleteWorkoutMutationOptions = Apollo.BaseMutationOptions<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>;
export const GetWorkoutDocument = gql`
    query getWorkout($workoutId: Float!) {
  getWorkout(workoutId: $workoutId) {
    name
    description
    numSets
    workoutType
    sets
    id
    equiptment
    recordClimbs
    notifications
  }
}
    `;

/**
 * __useGetWorkoutQuery__
 *
 * To run a query within a React component, call `useGetWorkoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutQuery({
 *   variables: {
 *      workoutId: // value for 'workoutId'
 *   },
 * });
 */
export function useGetWorkoutQuery(baseOptions: Apollo.QueryHookOptions<GetWorkoutQuery, GetWorkoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutQuery, GetWorkoutQueryVariables>(GetWorkoutDocument, options);
      }
export function useGetWorkoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutQuery, GetWorkoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutQuery, GetWorkoutQueryVariables>(GetWorkoutDocument, options);
        }
export type GetWorkoutQueryHookResult = ReturnType<typeof useGetWorkoutQuery>;
export type GetWorkoutLazyQueryHookResult = ReturnType<typeof useGetWorkoutLazyQuery>;
export type GetWorkoutQueryResult = Apollo.QueryResult<GetWorkoutQuery, GetWorkoutQueryVariables>;
export const GetWorkoutsDocument = gql`
    query GetWorkouts {
  getWorkoutsInOrg {
    name
    description
    numSets
    workoutType
    sets
    id
    equiptment
    recordClimbs
    notifications
  }
}
    `;

/**
 * __useGetWorkoutsQuery__
 *
 * To run a query within a React component, call `useGetWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkoutsDocument, options);
      }
export function useGetWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkoutsDocument, options);
        }
export type GetWorkoutsQueryHookResult = ReturnType<typeof useGetWorkoutsQuery>;
export type GetWorkoutsLazyQueryHookResult = ReturnType<typeof useGetWorkoutsLazyQuery>;
export type GetWorkoutsQueryResult = Apollo.QueryResult<GetWorkoutsQuery, GetWorkoutsQueryVariables>;
export const GetWorkoutsForTeamDocument = gql`
    query getWorkoutsForTeam($teamId: String!) {
  getWorkoutsForTeam(teamId: $teamId) {
    id
    workoutType
    name
  }
}
    `;

/**
 * __useGetWorkoutsForTeamQuery__
 *
 * To run a query within a React component, call `useGetWorkoutsForTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutsForTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutsForTeamQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useGetWorkoutsForTeamQuery(baseOptions: Apollo.QueryHookOptions<GetWorkoutsForTeamQuery, GetWorkoutsForTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutsForTeamQuery, GetWorkoutsForTeamQueryVariables>(GetWorkoutsForTeamDocument, options);
      }
export function useGetWorkoutsForTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutsForTeamQuery, GetWorkoutsForTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutsForTeamQuery, GetWorkoutsForTeamQueryVariables>(GetWorkoutsForTeamDocument, options);
        }
export type GetWorkoutsForTeamQueryHookResult = ReturnType<typeof useGetWorkoutsForTeamQuery>;
export type GetWorkoutsForTeamLazyQueryHookResult = ReturnType<typeof useGetWorkoutsForTeamLazyQuery>;
export type GetWorkoutsForTeamQueryResult = Apollo.QueryResult<GetWorkoutsForTeamQuery, GetWorkoutsForTeamQueryVariables>;
export const GetSessionsForAthleteDocument = gql`
    query GetSessionsForAthlete($athleteId: String!) {
  getCompletedSessionsForAthlete(athleteId: $athleteId) {
    id
    date
    percentCompleted
    rpe
    workout {
      name
      workoutType
    }
  }
}
    `;

/**
 * __useGetSessionsForAthleteQuery__
 *
 * To run a query within a React component, call `useGetSessionsForAthleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionsForAthleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionsForAthleteQuery({
 *   variables: {
 *      athleteId: // value for 'athleteId'
 *   },
 * });
 */
export function useGetSessionsForAthleteQuery(baseOptions: Apollo.QueryHookOptions<GetSessionsForAthleteQuery, GetSessionsForAthleteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSessionsForAthleteQuery, GetSessionsForAthleteQueryVariables>(GetSessionsForAthleteDocument, options);
      }
export function useGetSessionsForAthleteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionsForAthleteQuery, GetSessionsForAthleteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSessionsForAthleteQuery, GetSessionsForAthleteQueryVariables>(GetSessionsForAthleteDocument, options);
        }
export type GetSessionsForAthleteQueryHookResult = ReturnType<typeof useGetSessionsForAthleteQuery>;
export type GetSessionsForAthleteLazyQueryHookResult = ReturnType<typeof useGetSessionsForAthleteLazyQuery>;
export type GetSessionsForAthleteQueryResult = Apollo.QueryResult<GetSessionsForAthleteQuery, GetSessionsForAthleteQueryVariables>;