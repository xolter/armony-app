import { ChangeEvent, FormEvent, FC, useState } from 'react';
import './NewsletterForm.css';
import '../../App.css';
import { postContact } from '../../services/service';
import { useNavigate } from 'react-router-dom';
import arrowsImg from '../../images/arrows.png';

export interface Contact {
  email: string,
  firstName: string
}

const NewsletterForm: FC = () => {

const [contact, setContact] = useState<Contact>({email:"", firstName:""});
const [validFirstName, setValidFirstName] = useState<boolean>(true);
const [validEmail, setValidEmail] = useState<boolean>(true);
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setContact({ ...contact, [name]: value });
}
let navigate = useNavigate();

const handleSubmitForm = (event:FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (checkFirstName() && checkEmail()) {
    postContact(contact).then(res => { navigate('/newsletter-form/validation', {state:res}); });
  }
}

function checkFirstName() {
  const isValid = contact.firstName !== null && contact.firstName !== "";
  setValidFirstName(isValid);
  return isValid;
}

function checkEmail() {
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailReg.test(contact.email);
  setValidEmail(isValid);
  return isValid;
}

return (
  <>
  <div className='page-wrap newsletter-page'>
    <h1 className='title-medium'>LE E-BOOK EST LA !</h1>
    <img className='arrows-img' alt="arrows-img" src={arrowsImg} />
    <div className='newsletter-block'>
      <h1 className='title-medium no-padding-bot'>LE DRESSING SUR MESURE</h1>
      <h2 className='subtitle'>ETAPE PAR ETAPE</h2>
      <div>
        <p>1/ Les plans papier et 3D avec toutes les mesures</p>
        <p>2/ Le montage étape par étape détaillé et illustré</p>
        <p>3/ Les erreurs que j'ai commises (à ne pas reproduire !!)</p>
      </div>
    </div>
    <div className='newsletter-block_blue'>
      <h1 className='title-medium_main-color'>INSPIRE TOI DE MON DRESSING POUR REALISER LE TIEN</h1>
      <p>Je n'ai jamais réalisé quoi que ce soit avant ce dressing (hors meubles IKEA haha)</p>
      <p>Mon système d'assemblage est facile pour un(e) débutant(e) et peut s'appliquer à n'import quel projet</p>
    </div>
    <h1 className='title-medium'>TOUT SE PASSE ICI</h1>
    <div className='newsletter-form__title drop-shadow-lg'>
        <h2>TELECHARGER MON EBOOK GRATUIT (LISTE D'ATTENTE)</h2>
    </div>
    <form className='newsletter-form drop-shadow-lg' onSubmit={handleSubmitForm}>
      <div className='newsletter-form__form-element'>
        <input type="text" value={contact.firstName} name="firstName" placeholder='PRENOM*' onChange={handleInputChange}/>
        {!validFirstName && <span>Ce champ est requis</span>}
      </div>
      <div className='newsletter-form__form-element'>
        <input type="text" value={contact.email} name="email" placeholder='EMAIL*' onChange={handleInputChange}/>
        {!validEmail && <span>Adresse email invalide</span>}
      </div>
      <div className='newsletter-form__form-element'>
        <input type="submit" name="subscribe"/>
      </div>
    </form>
    <h1 className='title-medium'>TU AS BESOIN QUE JE VIENNE T'AIDER A DOMICILE ?</h1>
    <div className='newsletter-button'>
      <button className='offer-button'>Découvre mes offres</button>
    </div>
  </div>
  </>
  );
}

export default NewsletterForm;