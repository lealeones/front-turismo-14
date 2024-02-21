import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Association = {
  __typename?: 'Association';
  dsrc: Scalars['String']['output'];
  id?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  trips?: Maybe<Array<Trip>>;
  urlImage: Scalars['String']['output'];
};

export type AssociationInput = {
  dsrc: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  trips?: InputMaybe<Array<TripInput>>;
  urlImage: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssociation: Association;
  createTrip: Trip;
  removeAssociation: Association;
  removeTrip: Trip;
  updateAssociation: Association;
  updateTrip: Trip;
};


export type MutationCreateAssociationArgs = {
  input: AssociationInput;
};


export type MutationCreateTripArgs = {
  input: TripInput;
};


export type MutationRemoveAssociationArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveTripArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateAssociationArgs = {
  input: AssociationInput;
};


export type MutationUpdateTripArgs = {
  input: TripInput;
};

export type Query = {
  __typename?: 'Query';
  association: Association;
  associations: Array<Association>;
  findTrips: Array<Trip>;
  trip: Trip;
};


export type QueryAssociationArgs = {
  id: Scalars['Float']['input'];
};


export type QueryFindTripsArgs = {
  currentWeek: Scalars['Boolean']['input'];
};


export type QueryTripArgs = {
  id: Scalars['Float']['input'];
};

export type Ticket = {
  __typename?: 'Ticket';
  /** dni */
  dni: Scalars['Int']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** idTrip */
  idTrip: Scalars['Int']['output'];
  /** lasName */
  lasName: Scalars['String']['output'];
  /** name */
  name: Scalars['String']['output'];
};

export type TicketInput = {
  /** dni */
  dni: Scalars['Int']['input'];
  /** id */
  id: Scalars['Int']['input'];
  /** idTrip */
  idTrip: Scalars['Int']['input'];
  /** lasName */
  lasName: Scalars['String']['input'];
  /** name */
  name: Scalars['String']['input'];
};

export type Trip = {
  __typename?: 'Trip';
  /** dscr */
  dscr: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** startTime */
  startTime: Scalars['DateTimeISO']['output'];
  /** dscr */
  ticket?: Maybe<Array<Ticket>>;
  /** title */
  title: Scalars['String']['output'];
};

export type TripInput = {
  /** dscr */
  dscr: Scalars['String']['input'];
  /** id */
  id: Scalars['Int']['input'];
  /** startTime */
  startTime: Scalars['DateTimeISO']['input'];
  /** dscr */
  ticket?: InputMaybe<Array<TicketInput>>;
  /** title */
  title: Scalars['String']['input'];
};

export type FindAllAssociationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAssociationsQuery = { __typename?: 'Query', associations: Array<{ __typename?: 'Association', id?: number | null, name: string, dsrc: string, urlImage: string }> };

export type CreateAssociationMutationVariables = Exact<{
  data: AssociationInput;
}>;


export type CreateAssociationMutation = { __typename?: 'Mutation', createAssociation: { __typename?: 'Association', id?: number | null } };

export type CreateTripMutationVariables = Exact<{
  data: TripInput;
}>;


export type CreateTripMutation = { __typename?: 'Mutation', createTrip: { __typename?: 'Trip', id: number } };


export const FindAllAssociationsDocument = gql`
    query findAllAssociations {
  associations {
    id
    name
    dsrc
    urlImage
  }
}
    `;

/**
 * __useFindAllAssociationsQuery__
 *
 * To run a query within a React component, call `useFindAllAssociationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllAssociationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllAssociationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllAssociationsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>(FindAllAssociationsDocument, options);
      }
export function useFindAllAssociationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>(FindAllAssociationsDocument, options);
        }
export function useFindAllAssociationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>(FindAllAssociationsDocument, options);
        }
export type FindAllAssociationsQueryHookResult = ReturnType<typeof useFindAllAssociationsQuery>;
export type FindAllAssociationsLazyQueryHookResult = ReturnType<typeof useFindAllAssociationsLazyQuery>;
export type FindAllAssociationsSuspenseQueryHookResult = ReturnType<typeof useFindAllAssociationsSuspenseQuery>;
export type FindAllAssociationsQueryResult = Apollo.QueryResult<FindAllAssociationsQuery, FindAllAssociationsQueryVariables>;
export const CreateAssociationDocument = gql`
    mutation createAssociation($data: AssociationInput!) {
  createAssociation(input: $data) {
    id
  }
}
    `;
export type CreateAssociationMutationFn = Apollo.MutationFunction<CreateAssociationMutation, CreateAssociationMutationVariables>;

/**
 * __useCreateAssociationMutation__
 *
 * To run a mutation, you first call `useCreateAssociationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssociationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssociationMutation, { data, loading, error }] = useCreateAssociationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAssociationMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssociationMutation, CreateAssociationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssociationMutation, CreateAssociationMutationVariables>(CreateAssociationDocument, options);
      }
export type CreateAssociationMutationHookResult = ReturnType<typeof useCreateAssociationMutation>;
export type CreateAssociationMutationResult = Apollo.MutationResult<CreateAssociationMutation>;
export type CreateAssociationMutationOptions = Apollo.BaseMutationOptions<CreateAssociationMutation, CreateAssociationMutationVariables>;
export const CreateTripDocument = gql`
    mutation createTrip($data: TripInput!) {
  createTrip(input: $data) {
    id
  }
}
    `;
export type CreateTripMutationFn = Apollo.MutationFunction<CreateTripMutation, CreateTripMutationVariables>;

/**
 * __useCreateTripMutation__
 *
 * To run a mutation, you first call `useCreateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripMutation, { data, loading, error }] = useCreateTripMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTripMutation(baseOptions?: Apollo.MutationHookOptions<CreateTripMutation, CreateTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTripMutation, CreateTripMutationVariables>(CreateTripDocument, options);
      }
export type CreateTripMutationHookResult = ReturnType<typeof useCreateTripMutation>;
export type CreateTripMutationResult = Apollo.MutationResult<CreateTripMutation>;
export type CreateTripMutationOptions = Apollo.BaseMutationOptions<CreateTripMutation, CreateTripMutationVariables>;