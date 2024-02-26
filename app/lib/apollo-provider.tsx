"use client";

import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ApolloLink, split, createHttpLink } from '@apollo/client';




//FIXME URL DESDE ENV
function makeClient() {


  const wslink = new GraphQLWsLink(
    createClient({
      url: 'ws://localhost:3001/ws'
    }))


  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
  });


  const splitlink = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wslink,
    httpLink,
  );

  const link = ApolloLink.from([splitlink])

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), link])
        : link,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}