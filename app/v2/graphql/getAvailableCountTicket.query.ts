import gql from "graphql-tag"

export default gql`
query getCountTicketAvailable($data: Int!){
    ticketAvailable(idTrip: $data)
  }
`