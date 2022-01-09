import { request, gql } from 'graphql-request';
import { TPost } from './components/pages/Projects';

interface ProcessEnv {
    [key: string]: string | undefined;
}

const graphqlAPI:ProcessEnv["REACT_APP_API_GRAPHCMS"] = process.env.REACT_APP_API_GRAPHCMS;

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

    if (graphqlAPI) {
        const data = await request<TPost>(graphqlAPI, query).then();
        return data;
    } else {
        const emptyPost: TPost = {posts: [
            {
                title: "Example",
                summary: "",
                featuredImage: {
                  url: ""
                }
            }
        ]};
        return emptyPost;
    }
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