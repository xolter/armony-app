import { ChangeEvent, FC, useState } from 'react';
import './NewsletterForm.css';
import '../../App.css';
//import MailchimpSubscribe from 'react-mailchimp-subscribe';

interface Contact {
  email: string,
  firstName: string
}
const NewsletterForm: FC = () => {
 
//const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL || "";
const [contact, setContact] = useState<Contact>({email:"", firstName:""});
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setContact({ ...contact, [name]: value });
}

return (
    //<MailchimpSubscribe url={MAILCHIMP_URL}/>
    //<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
  <>
  <div className='page-wrap NewsletterPage'>
    <div className='FormTitle drop-shadow-lg'>
        <h2>Télécharger mon E-Book (liste d'attente)</h2>
    </div>
    <form className='NewsletterForm drop-shadow-lg'>
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

