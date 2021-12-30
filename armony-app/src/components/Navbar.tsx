import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/youtube_logo.png';
import './Navbar.css';


const Navbar: FC = () => {

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  
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
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <img src={img1} alt='logo' className={navbar ? 'navbar-logo active' : 'navbar-logo'} />
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times nav-icon' : 'fas fa-bars nav-icon'} />
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/catalog' className='nav-links' onClick={closeMobileMenu}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
