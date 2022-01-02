import { FC } from 'react';
import '../../App.css';
import Slider from '../Slider';

interface IProps {
  scrollable: boolean
}

const Home: FC = () => {
  return (
    <>
      <div>
        <Slider />
      </div>
      <h1>Home</h1>
    </>
  );
}

export default Home;
