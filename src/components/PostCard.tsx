import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    post: {
        title: string
        summary: string
        slug?: string
        featuredImage: {
            url: string
        }
        featuredImage2?: {
        url: string
        }
    }
}

const PostCard: FC<IProps>  = ({post}: IProps) => {
    return (
        <div className='p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover'
                />
            </div>
            <h1 className='transition duration-700 text-center mb-2 cursor-pointer'>{post.title}</h1>
            <p className='text-center px-4 lg:px-10 font-semibold pt-2'>{post.summary}</p>
            <div className="text-center pt-4">
                <Link to={`/post/${post.slug}`}>
                <span className="transition duration-500 underline text-lg font-medium px-8 py-3 cursor-pointer">Lire plus</span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
