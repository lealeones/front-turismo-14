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
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  deletePost?: Maybe<Post>;
  incrementPostViewCount: Post;
  signupUser: User;
  togglePublishPost?: Maybe<Post>;
};


export type MutationCreateDraftArgs = {
  authorEmail: Scalars['String']['input'];
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float']['input'];
};


export type MutationIncrementPostViewCountArgs = {
  id: Scalars['Float']['input'];
};


export type MutationSignupUserArgs = {
  data: UserCreateInput;
};


export type MutationTogglePublishPostArgs = {
  id: Scalars['Float']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Int']['output'];
};

export type PostCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PostOrderByUpdatedAtInput = {
  updatedAt: SortOrder;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<User>>;
  draftsByUser?: Maybe<Array<Post>>;
  feed: Array<Post>;
  postById?: Maybe<Post>;
};


export type QueryDraftsByUserArgs = {
  userUniqueInput: UserUniqueInput;
};


export type QueryFeedArgs = {
  orderBy?: InputMaybe<PostOrderByUpdatedAtInput>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPostByIdArgs = {
  id: Scalars['Float']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  amountAvailableTicket: Scalars['Float']['output'];
  newTrips: Scalars['String']['output'];
};


export type SubscriptionAmountAvailableTicketArgs = {
  idTrip: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<PostCreateInput>>;
};

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
};

export type AmountAvailableTicketSubscriptionVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type AmountAvailableTicketSubscription = { __typename?: 'Subscription', amountAvailableTicket: number };

export type SubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubSubscription = { __typename?: 'Subscription', newTrips: string };


export const AmountAvailableTicketDocument = gql`
    subscription amountAvailableTicket($data: String!) {
  amountAvailableTicket(idTrip: $data)
}
    `;

/**
 * __useAmountAvailableTicketSubscription__
 *
 * To run a query within a React component, call `useAmountAvailableTicketSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAmountAvailableTicketSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAmountAvailableTicketSubscription({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAmountAvailableTicketSubscription(baseOptions: Apollo.SubscriptionHookOptions<AmountAvailableTicketSubscription, AmountAvailableTicketSubscriptionVariables> & ({ variables: AmountAvailableTicketSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AmountAvailableTicketSubscription, AmountAvailableTicketSubscriptionVariables>(AmountAvailableTicketDocument, options);
      }
export type AmountAvailableTicketSubscriptionHookResult = ReturnType<typeof useAmountAvailableTicketSubscription>;
export type AmountAvailableTicketSubscriptionResult = Apollo.SubscriptionResult<AmountAvailableTicketSubscription>;
export const SubDocument = gql`
    subscription sub {
  newTrips
}
    `;

/**
 * __useSubSubscription__
 *
 * To run a query within a React component, call `useSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubSubscription, SubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubSubscription, SubSubscriptionVariables>(SubDocument, options);
      }
export type SubSubscriptionHookResult = ReturnType<typeof useSubSubscription>;
export type SubSubscriptionResult = Apollo.SubscriptionResult<SubSubscription>;