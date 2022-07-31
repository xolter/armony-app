import { FC } from 'react';
import './NewsletterForm.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface ILocation {
  code: string,
  message: string
}

const Validation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ILocation;
  const code = state && state.code ? state.code : null;
  let textStyle = null;
  let buttonMessage;
  if (code && code === "200") {
    textStyle = "newsletter__validation_green";
    buttonMessage = "Retour à l'accueil";
  } else {
    textStyle = "newsletter__validation_red";
    buttonMessage = "Retour au formulaire";
  }
  const handleClick = () => {
    if (code && code === "200") {
      navigate('/');
    } else {
      navigate('/newsletter-form');
    }
  }

  return (
    <div className='page-wrap newsletter-page'>
      <div className='newsletter-form__title drop-shadow-lg'>
          <h2>TELECHARGER MON EBOOK GRATUIT (LISTE D'ATTENTE)</h2>
      </div>
      <div className='newsletter-form newsletter__validation drop-shadow-lg'>
        <div className='newsletter__validation-text'>
        {state && state.message && textStyle && <h2 className={ textStyle }>{ state.message }</h2>}
        </div>
        <div >
          <button className='newsletter__validation-button' onClick={ handleClick }>{ buttonMessage }</button>
        </div>
      </div>
    </div>
  );
}

export default Validation;
