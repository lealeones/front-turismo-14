import gql from "graphql-tag"

export default gql`
query findAllAssociations{
    associations{
      id 
      name
      dsrc
      urlImage
    }
  }
`