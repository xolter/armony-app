import { FC } from 'react';
import { Link } from 'react-router-dom';

const Contact: FC = () => {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}