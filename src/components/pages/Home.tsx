import { FC } from 'react';
import '../../App.css';
import HomeCards from '../HomeCards';
import Slider from '../Slider';

const Home: FC = () => {
  return (
    <>
      <Slider />
      <h1 className='bigTitle'>« Incroyable »</h1>
      <HomeCards />
      <h1 className='bigTitle'>« Surprenant »</h1>
      <HomeCards />
      <h1 className='bigTitle2'> </h1>
    </>
  );
}

export default Home;
