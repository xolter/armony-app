import { FC } from 'react';
import '../../App.css';
import HomeCards from '../HomeCards';
import HomeGallery from '../HomeGallery';
import Slider from '../Slider';

const Home: FC = () => {
  return (
    <>
      <Slider />
      <h1 className='bigTitle'>MES OFFRES</h1>
      <HomeCards />
      <h1 className='bigTitle'>QUELQUES CREATIONS</h1>
      <HomeGallery />
      <h1 className='bigTitle'>QUI SUIS-JE ?</h1>
      <h1 className='bigTitle2'> </h1>
    </>
  );
}

export default Home;
