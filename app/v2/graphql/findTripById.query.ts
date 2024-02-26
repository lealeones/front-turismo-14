
import gql from "graphql-tag"

export default gql`
query tripById($data :Int! ){
    trip(id:$data)
    {
      id
      startTime
      title
      dscr
      associationId
      places
      nameAssociation
    }
  }

`