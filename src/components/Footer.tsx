import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-social-media'>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-instagram nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-youtube nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fab fa-pinterest-p nav-icon"></i></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><i className="fas fa-envelope nav-icon"></i></a>
        </div>
        <p className='copyright'>© 2022 Armony - Tous droits réservés</p>
      </div>
    </>
  );
}

export default Footer;
