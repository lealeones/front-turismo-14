

module.exports = {
  // schema: [`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`],
  schema: [`http://localhost:3001/ws`],
  documents: './app/v2/graphqlws/*.{ts,tsx}',
  overwrite: true,
  generates: {
    './graphqlws/types.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        headers: {
          Authorization: `Bearer 123`,
        },
        //defaultBaseOptions: { context: { clientName: 'expedienteLink' } },
        withMutationFn: true,
        withHOC: false,
        withHooks: true,
        withComponent: false,
      },
    },
  },
};