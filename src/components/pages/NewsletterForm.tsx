import { ChangeEvent, FC, useState } from 'react';
import './NewsletterForm.css';
import '../../App.css';
//import MailchimpSubscribe from 'react-mailchimp-subscribe';

interface Contact {
  email: string,
  firstName: string
}
const NewsletterForm: FC = () => {

const [contact, setContact] = useState<Contact>({email:"", firstName:""});
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setContact({ ...contact, [name]: value });
}

const handleSubmitForm = async(event:any) => {
  event.preventDefault();
  fetch('/api/contact', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(contact)
  });
}

return (
  <>
  <div className='page-wrap NewsletterPage'>
    <div className='FormTitle drop-shadow-lg'>
        <h2>Télécharger mon E-Book (liste d'attente)</h2>
    </div>
    <form className='NewsletterForm drop-shadow-lg' onSubmit={handleSubmitForm}>
      <div className='FormElement'>
        <input type="text" value={contact.firstName} name="firstName" className="" placeholder='Prénom*' onChange={handleInputChange}/>
      </div>
      <div className='FormElement'>
        <input type="text" value={contact.email} name="email" className="" placeholder='Email*' onChange={handleInputChange}/>
      </div>
      <div className='FormElement'>
        <input type="submit" value="Envoyer" name="subscribe" className=""/>
      </div>
    </form>
  </div>
  </>
  );
}

export default NewsletterForm;