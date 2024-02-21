import gql from "graphql-tag"

export default gql`
mutation createTrip($data: TripInput!){
    createTrip(input: $data){
      id
    }
  }
`