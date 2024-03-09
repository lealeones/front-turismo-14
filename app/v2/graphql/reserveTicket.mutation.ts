import gql from "graphql-tag"
export default gql`
mutation reserveTicket ($idTrip : Float! , $reservedTickets: Float! ){
    reserveTickets(reservedTickets: $reservedTickets , idTrip:$idTrip)  {
    tickets{
      id
    }
    message,
    status
    }
  }
`