import gql from "graphql-tag"

export default gql`
query findTrips($data :Boolean!){
    findTrips(currentWeek: $data){
      id
      startTime
      title
      dscr
      associationId
      places
    }
  }
`