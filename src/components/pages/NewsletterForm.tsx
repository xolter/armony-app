import { ChangeEvent, FormEvent, FC, useState } from 'react';
import './NewsletterForm.css';
import '../../App.css';
import { postContact } from '../../services/service';

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

const handleSubmitForm = (event:FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (checkFirstName() && checkEmail()) {
    postContact(contact).then(res => console.log(res));
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
  <div className='page-wrap NewsletterPage'>
    <div className='FormTitle drop-shadow-lg'>
        <h2>Télécharger mon E-Book (liste d'attente)</h2>
    </div>
    <form className='NewsletterForm drop-shadow-lg' onSubmit={handleSubmitForm}>
      <div className='FormElement'>
        <input type="text" value={contact.firstName} name="firstName" placeholder='Prénom*' onChange={handleInputChange}/>
        {!validFirstName && <span>Ce champ est requis</span>}
      </div>
      <div className='FormElement'>
        <input type="text" value={contact.email} name="email" placeholder='Email*' onChange={handleInputChange}/>
        {!validEmail && <span>Adresse email invalide</span>}
      </div>
      <div className='FormElement'>
        <input type="submit" name="subscribe"/>
      </div>
    </form>
  </div>
  </>
  );
}

export default NewsletterForm;