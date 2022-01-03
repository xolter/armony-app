import { FC } from 'react';
import '../../App.css';
import HomeCards from '../HomeCards';
import Slider from '../Slider';

interface IProps {
  scrollable: boolean
}

const Home: FC = () => {
  return (
    <>
      <Slider />
      <HomeCards />
    </>
  );
}

export default Home;
