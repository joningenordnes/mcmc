import { gql } from '@apollo/client';

export const postQuery = gql`
    query Query($where: PostWhereUniqueInput!) {
        post(where: $where) {
            id
            title
            content {
                __typename
                document
            }
        }
    }
`;