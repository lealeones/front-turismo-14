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
  _count?: Maybe<AssociationCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  dsrc: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  urlImage: Scalars['String']['output'];
};

export type AssociationCount = {
  __typename?: 'AssociationCount';
  trips: Scalars['Int']['output'];
};


export type AssociationCountTripsArgs = {
  where?: InputMaybe<TripWhereInput>;
};

export type AssociationCreateNestedOneWithoutTripsInput = {
  connect?: InputMaybe<AssociationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AssociationCreateOrConnectWithoutTripsInput>;
  create?: InputMaybe<AssociationCreateWithoutTripsInput>;
};

export type AssociationCreateOrConnectWithoutTripsInput = {
  create: AssociationCreateWithoutTripsInput;
  where: AssociationWhereUniqueInput;
};

export type AssociationCreateWithoutTripsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dsrc: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  urlImage: Scalars['String']['input'];
};

export type AssociationRelationFilter = {
  is?: InputMaybe<AssociationWhereInput>;
  isNot?: InputMaybe<AssociationWhereInput>;
};

export type AssociationWhereInput = {
  AND?: InputMaybe<Array<AssociationWhereInput>>;
  NOT?: InputMaybe<Array<AssociationWhereInput>>;
  OR?: InputMaybe<Array<AssociationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dsrc?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  trips?: InputMaybe<TripListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  urlImage?: InputMaybe<StringFilter>;
};

export type AssociationWhereUniqueInput = {
  AND?: InputMaybe<Array<AssociationWhereInput>>;
  NOT?: InputMaybe<Array<AssociationWhereInput>>;
  OR?: InputMaybe<Array<AssociationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dsrc?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  trips?: InputMaybe<TripListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  urlImage?: InputMaybe<StringFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type GetTicketResponse = {
  __typename?: 'GetTicketResponse';
  /** message */
  message: Scalars['String']['output'];
  /** status */
  status: Scalars['Int']['output'];
  /** tickets */
  tickets?: Maybe<Array<Ticket>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssociation: Association;
  createTrip: Trip;
  getNewTicket: GetTicketResponse;
};


export type MutationCreateAssociationArgs = {
  input: AssociationCreateWithoutTripsInput;
};


export type MutationCreateTripArgs = {
  TripCreateWithoutTicketsInput: TripCreateWithoutTicketsInput;
};


export type MutationGetNewTicketArgs = {
  input: Scalars['Float']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  associations: Array<Association>;
  findTrips: Array<Trip>;
  ticketAvailable: Scalars['Float']['output'];
  trip: Trip;
};


export type QueryFindTripsArgs = {
  currentWeek: Scalars['Boolean']['input'];
};


export type QueryTicketAvailableArgs = {
  idTrip: Scalars['Int']['input'];
};


export type QueryTripArgs = {
  id: Scalars['Int']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt: Scalars['DateTimeISO']['output'];
  dni: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  isAdult: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tripId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dni?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isAdult?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  trip?: InputMaybe<TripRelationFilter>;
  tripId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Trip = {
  __typename?: 'Trip';
  _count?: Maybe<TripCount>;
  associationId: Scalars['Int']['output'];
  dscr: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  nameAssociation?: Maybe<Scalars['String']['output']>;
  places: Scalars['Int']['output'];
  startTime: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
};

export type TripCount = {
  __typename?: 'TripCount';
  tickets: Scalars['Int']['output'];
};


export type TripCountTicketsArgs = {
  where?: InputMaybe<TicketWhereInput>;
};

export type TripCreateWithoutTicketsInput = {
  association: AssociationCreateNestedOneWithoutTripsInput;
  dscr: Scalars['String']['input'];
  places?: InputMaybe<Scalars['Int']['input']>;
  startTime: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type TripListRelationFilter = {
  every?: InputMaybe<TripWhereInput>;
  none?: InputMaybe<TripWhereInput>;
  some?: InputMaybe<TripWhereInput>;
};

export type TripRelationFilter = {
  is?: InputMaybe<TripWhereInput>;
  isNot?: InputMaybe<TripWhereInput>;
};

export type TripWhereInput = {
  AND?: InputMaybe<Array<TripWhereInput>>;
  NOT?: InputMaybe<Array<TripWhereInput>>;
  OR?: InputMaybe<Array<TripWhereInput>>;
  association?: InputMaybe<AssociationRelationFilter>;
  associationId?: InputMaybe<IntFilter>;
  dscr?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  places?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  tickets?: InputMaybe<TicketListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CreateAssociationMutationVariables = Exact<{
  data: AssociationCreateWithoutTripsInput;
}>;


export type CreateAssociationMutation = { __typename?: 'Mutation', createAssociation: { __typename?: 'Association', id: number } };

export type CreateTripMutationVariables = Exact<{
  data: TripCreateWithoutTicketsInput;
}>;


export type CreateTripMutation = { __typename?: 'Mutation', createTrip: { __typename?: 'Trip', id: number } };

export type FindAllAssociationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAssociationsQuery = { __typename?: 'Query', associations: Array<{ __typename?: 'Association', id: number, name: string, dsrc: string, urlImage: string }> };

export type TripByIdQueryVariables = Exact<{
  data: Scalars['Int']['input'];
}>;


export type TripByIdQuery = { __typename?: 'Query', trip: { __typename?: 'Trip', id: number, startTime: any, title: string, dscr: string, associationId: number, places: number, nameAssociation?: string | null } };

export type FindTripsQueryVariables = Exact<{
  data: Scalars['Boolean']['input'];
}>;


export type FindTripsQuery = { __typename?: 'Query', findTrips: Array<{ __typename?: 'Trip', id: number, startTime: any, title: string, dscr: string, associationId: number, places: number }> };

export type GetCountTicketAvailableQueryVariables = Exact<{
  data: Scalars['Int']['input'];
}>;


export type GetCountTicketAvailableQuery = { __typename?: 'Query', ticketAvailable: number };


export const CreateAssociationDocument = gql`
    mutation createAssociation($data: AssociationCreateWithoutTripsInput!) {
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
    mutation createTrip($data: TripCreateWithoutTicketsInput!) {
  createTrip(TripCreateWithoutTicketsInput: $data) {
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
export const TripByIdDocument = gql`
    query tripById($data: Int!) {
  trip(id: $data) {
    id
    startTime
    title
    dscr
    associationId
    places
    nameAssociation
  }
}
    `;

/**
 * __useTripByIdQuery__
 *
 * To run a query within a React component, call `useTripByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripByIdQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useTripByIdQuery(baseOptions: Apollo.QueryHookOptions<TripByIdQuery, TripByIdQueryVariables> & ({ variables: TripByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripByIdQuery, TripByIdQueryVariables>(TripByIdDocument, options);
      }
export function useTripByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripByIdQuery, TripByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripByIdQuery, TripByIdQueryVariables>(TripByIdDocument, options);
        }
export function useTripByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TripByIdQuery, TripByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TripByIdQuery, TripByIdQueryVariables>(TripByIdDocument, options);
        }
export type TripByIdQueryHookResult = ReturnType<typeof useTripByIdQuery>;
export type TripByIdLazyQueryHookResult = ReturnType<typeof useTripByIdLazyQuery>;
export type TripByIdSuspenseQueryHookResult = ReturnType<typeof useTripByIdSuspenseQuery>;
export type TripByIdQueryResult = Apollo.QueryResult<TripByIdQuery, TripByIdQueryVariables>;
export const FindTripsDocument = gql`
    query findTrips($data: Boolean!) {
  findTrips(currentWeek: $data) {
    id
    startTime
    title
    dscr
    associationId
    places
  }
}
    `;

/**
 * __useFindTripsQuery__
 *
 * To run a query within a React component, call `useFindTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTripsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFindTripsQuery(baseOptions: Apollo.QueryHookOptions<FindTripsQuery, FindTripsQueryVariables> & ({ variables: FindTripsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTripsQuery, FindTripsQueryVariables>(FindTripsDocument, options);
      }
export function useFindTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTripsQuery, FindTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTripsQuery, FindTripsQueryVariables>(FindTripsDocument, options);
        }
export function useFindTripsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindTripsQuery, FindTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTripsQuery, FindTripsQueryVariables>(FindTripsDocument, options);
        }
export type FindTripsQueryHookResult = ReturnType<typeof useFindTripsQuery>;
export type FindTripsLazyQueryHookResult = ReturnType<typeof useFindTripsLazyQuery>;
export type FindTripsSuspenseQueryHookResult = ReturnType<typeof useFindTripsSuspenseQuery>;
export type FindTripsQueryResult = Apollo.QueryResult<FindTripsQuery, FindTripsQueryVariables>;
export const GetCountTicketAvailableDocument = gql`
    query getCountTicketAvailable($data: Int!) {
  ticketAvailable(idTrip: $data)
}
    `;

/**
 * __useGetCountTicketAvailableQuery__
 *
 * To run a query within a React component, call `useGetCountTicketAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountTicketAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountTicketAvailableQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetCountTicketAvailableQuery(baseOptions: Apollo.QueryHookOptions<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables> & ({ variables: GetCountTicketAvailableQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>(GetCountTicketAvailableDocument, options);
      }
export function useGetCountTicketAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>(GetCountTicketAvailableDocument, options);
        }
export function useGetCountTicketAvailableSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>(GetCountTicketAvailableDocument, options);
        }
export type GetCountTicketAvailableQueryHookResult = ReturnType<typeof useGetCountTicketAvailableQuery>;
export type GetCountTicketAvailableLazyQueryHookResult = ReturnType<typeof useGetCountTicketAvailableLazyQuery>;
export type GetCountTicketAvailableSuspenseQueryHookResult = ReturnType<typeof useGetCountTicketAvailableSuspenseQuery>;
export type GetCountTicketAvailableQueryResult = Apollo.QueryResult<GetCountTicketAvailableQuery, GetCountTicketAvailableQueryVariables>;