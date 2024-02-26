

import gql from "graphql-tag"

export default gql`
subscription amountAvailableTicket($data :String!){
    amountAvailableTicket(idTrip: $data)
  }
`