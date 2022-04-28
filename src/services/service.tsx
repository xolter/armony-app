import { Contact } from "../components/pages/NewsletterForm";

export async function getPosts() {

    try{
        const response = await fetch('/api/projects');
        return await response.json();
    }catch(error) {
        console.log(error);
        return [];
    }

}

export async function postContact(contact: Contact) {
    try {
        const response = await fetch('/api/contact', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(contact)
        });
        const res = await response.json();
        return {code: res.code, message: res.message};
    } catch (error) {
        return {code: 500, message: "Erreur lors de l'envoi du formulaire, veuillez réessayer"};
    }
}