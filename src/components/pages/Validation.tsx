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
    textStyle = "ValidationSuccess";
    buttonMessage = "Retour à l'accueil";
  } else {
    textStyle = "ValidationError";
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
    <div className='page-wrap NewsletterPage'>
      <div className='FormTitle drop-shadow-lg'>
          <h2>TELECHARGER MON EBOOK GRATUIT (LISTE D'ATTENTE)</h2>
      </div>
      <div className='NewsletterForm NewsletterValidation drop-shadow-lg'>
        <div className='ValidationText'>
        {state && state.message && textStyle && <h2 className={ textStyle }>{ state.message }</h2>}
        </div>
        <div >
          <button className='ValidationButton' onClick={ handleClick }>{ buttonMessage }</button>
        </div>
      </div>
    </div>
  );
}

export default Validation;
