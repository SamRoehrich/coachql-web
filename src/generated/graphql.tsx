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

export type Athlete = {
  __typename?: 'Athlete';
  id: Scalars['Int'];
  male: Scalars['Boolean'];
  female: Scalars['Boolean'];
  user: User;
  birthYear: Scalars['Int'];
  team: Scalars['String'];
};

export type Boulder = {
  __typename?: 'Boulder';
  id: Scalars['Int'];
  scoreKeeper: User;
  boulderNumber: Scalars['Int'];
  stack: Stack;
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
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  login: LoginResponse;
  createEvent: Scalars['Boolean'];
  registerAthlete: Scalars['Boolean'];
  registerTeam: Scalars['Boolean'];
  createAthlete: Scalars['Boolean'];
  addAthleteToEvent: Scalars['Boolean'];
  createStack: Scalars['Boolean'];
  createBoulder: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateEventArgs = {
  numBoulders: Scalars['Float'];
  startDate: Scalars['String'];
  visible: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRegisterAthleteArgs = {
  evnetId: Scalars['String'];
};


export type MutationRegisterTeamArgs = {
  teamName: Scalars['String'];
};


export type MutationCreateAthleteArgs = {
  female: Scalars['Boolean'];
  male: Scalars['Boolean'];
  team: Scalars['String'];
  birthYear: Scalars['Float'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationAddAthleteToEventArgs = {
  eventId: Scalars['String'];
  athleteId: Scalars['String'];
};


export type MutationCreateStackArgs = {
  d: Scalars['Boolean'];
  c: Scalars['Boolean'];
  b: Scalars['Boolean'];
  a: Scalars['Boolean'];
  jr: Scalars['Boolean'];
  female: Scalars['Boolean'];
  male: Scalars['Boolean'];
  eventId: Scalars['String'];
};


export type MutationCreateBoulderArgs = {
  boulderNumber: Scalars['Float'];
  stackId: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  users: Array<User>;
  me?: Maybe<User>;
  bye: Scalars['String'];
  events: Array<Event>;
  event: Event;
  getAuthenticatedEvents: Array<Event>;
  teams: Array<Team>;
  athletes: Array<Athlete>;
  getStacks: Array<Stack>;
  getBoulders: Array<Boulder>;
  getBoulder: Boulder;
};


export type QueryEventArgs = {
  eventId: Scalars['String'];
};


export type QueryAthletesArgs = {
  eventId: Scalars['String'];
};


export type QueryGetStacksArgs = {
  eventId: Scalars['String'];
};


export type QueryGetBoulderArgs = {
  boulderId: Scalars['Float'];
};

export type Stack = {
  __typename?: 'Stack';
  id: Scalars['Int'];
  male: Scalars['Boolean'];
  female: Scalars['Boolean'];
  jr: Scalars['Boolean'];
  a: Scalars['Boolean'];
  b: Scalars['Boolean'];
  c: Scalars['Boolean'];
  d: Scalars['Boolean'];
  event: Event;
  athletes: Array<Athlete>;
  boulders: Array<Boulder>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  headCoach: User;
  teamName: Scalars['String'];
  athletes: Array<Athlete>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

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
    & Pick<Event, 'name' | 'location' | 'id'>
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
      & Pick<Athlete, 'male' | 'female' | 'id' | 'birthYear'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'lastName' | 'firstName'>
      ) }
    )>>, stacks?: Maybe<Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'male' | 'female' | 'a' | 'b' | 'c' | 'd' | 'jr'>
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
    & Pick<Event, 'id' | 'name'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'lastName' | 'firstName' | 'id' | 'email'>
    ), stacks?: Maybe<Array<(
      { __typename?: 'Stack' }
      & Pick<Stack, 'id' | 'female' | 'male' | 'a' | 'b' | 'c' | 'd' | 'jr'>
    )>>, athletes?: Maybe<Array<(
      { __typename?: 'Athlete' }
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'lastName' | 'firstName'>
      ) }
    )>> }
  ) }
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

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
  )> }
);


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
      male
      female
      id
      birthYear
      user {
        lastName
        firstName
      }
    }
    stacks {
      id
      male
      female
      a
      b
      c
      d
      jr
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
    creator {
      lastName
      firstName
      id
      email
    }
    stacks {
      id
      female
      male
      a
      b
      c
      d
      jr
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
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  register(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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