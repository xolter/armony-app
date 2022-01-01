import { FC, useEffect, useState } from 'react';
import '../../App.css';
import PostCard from '../PostCard';
import { getPosts } from '../../service';

export interface TPost {
  posts: [
    {
      title: string
      summary: string
      featuredImage: {
        url: string
      }
      featuredImage2?: {
        url: string
      }
    }
  ]
}

const Projects: FC = () => {

  const [posts, setPosts] = useState<TPost["posts"]>();

  useEffect(() => {
    async function fetchPosts() {
      const result = await getPosts();
      console.log(result);
      setPosts(result.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div className='page-wrap'>
      <div className='container mx-auto px-10 mb-8 mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {posts && posts.map((post) => <PostCard post={post} key={post.title}/>)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
