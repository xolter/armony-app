import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/armony_logo.png';
import './Navbar.css';

interface IProps {
  fixed: boolean
}

const Navbar: FC<IProps> = ({fixed} : IProps) => {

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

  let navBarClasses = 'navbar';
  if (fixed) {
    navBarClasses += ' nav-fixed';
    if (navbar) {
      navBarClasses += ' active';
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navBarClasses}>
        <img src={img1} alt='logo' className={fixed ? 'navbar-logo active' : 'navbar-logo'} />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times nav-icon' : 'fas fa-bars nav-icon'} />
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Mes offres
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Blog DIY
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/newsletter-form' className='nav-links' onClick={closeMobileMenu}>
              Ebook gratuit
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
