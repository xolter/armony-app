import { FC } from 'react';
import img1 from '../images/left_drawing.png';
import img2 from '../images/right_drawing.png';
import Navbar from './Navbar';
import './Navbar.css';


const Header: FC = () => {
  return (
    <>
      <div className='header'>
        <div id="drawings">
          <img id="left_drawing" alt="left_drawing" src={img1} />
          <img id="right_drawing" alt="right_drawing" src={img2} />
        </div>
        <div className='header-logo'>
          <h1 className='logoTitle'>ARMONY</h1>
          <h2>BRICOLAGE ET DIY - COACHINGS ET CREATIONS</h2>
        </div>
        <div className='header-social-media'>
          <a href='https://www.instagram.com/ony.deco/?hl=en' target='_blank' rel='noreferrer'><i className="fab fa-instagram nav-icon"></i></a>
          <a href='https://www.youtube.com/watch?v=hSCL_2tnY1s' target='_blank' rel='noreferrer'><i className="fab fa-youtube nav-icon"></i></a>
          <a href='https://www.pinterest.fr/armonycreation/_created/' target='_blank' rel='noreferrer'><i className="fab fa-pinterest-p nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fas fa-envelope nav-icon"></i></a>
        </div>
        <Navbar fixed={false}/>
        <Navbar fixed={true}/>
      </div>
    </>
  );
}

export default Header;
