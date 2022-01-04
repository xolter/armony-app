import { FC } from 'react';
import img1 from '../images/youtube_logo.png';
import Navbar from './Navbar';
import './Navbar.css';


const Header: FC = () => {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <img src={img1} alt='logo'/>
        </div>
        <div className='header-social-media'>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-instagram nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-facebook-f nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-pinterest-p nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fas fa-envelope nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fas fa-link nav-icon"></i></a>
        </div>
        <Navbar fixed={false}/>
        <Navbar fixed={true}/>
      </div>
    </>
  );
}

export default Header;
