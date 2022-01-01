import { request, gql } from 'graphql-request';
import { TPost } from './components/pages/Projects';

const graphqlAPI = '';

export const getPosts = async() => {
    
    const query = gql`
        query MyQuery {
            posts {
                title
                summary
                featuredImage {
                    url
                }
                featuredImage2 {
                    url
                }
            }
        }
    `;

    const data = await request<TPost>(graphqlAPI, query);
    return data;
}


/*export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
            edges {
                node {
                    slug
                    title
                    summary
                    featuredImage {
                        url
                    }
                    featuredImage2 {
                        url
                    }
                }
            }
        }
    }      
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges; 
}*/