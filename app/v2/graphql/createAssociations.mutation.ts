import gql from "graphql-tag"

export default gql`
mutation createAssociation($data: AssociationInput!){
    createAssociation(input: $data){
      id
    }
  }
`