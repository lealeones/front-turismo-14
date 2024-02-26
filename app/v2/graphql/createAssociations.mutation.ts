import gql from "graphql-tag"

export default gql`
mutation createAssociation($data: AssociationCreateWithoutTripsInput!){
    createAssociation(input: $data){
      id
    }
  }
`