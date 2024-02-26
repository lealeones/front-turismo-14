import gql from "graphql-tag"

export default gql`
mutation createTrip($data: TripCreateWithoutTicketsInput!){
    createTrip(TripCreateWithoutTicketsInput: $data){
      id
    }
  }
`