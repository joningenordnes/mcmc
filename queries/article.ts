import { gql } from '@apollo/client';

export const articleQuery = gql`
query Article($guid: UUID!){
    contentByGuid(id: $guid){
      __typename
      name
      namedProperties {
        __typename
        ... on Article {
          title { value }
          body { value }
        }
      }
    }
  }
`;