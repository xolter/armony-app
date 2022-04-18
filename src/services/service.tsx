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
        const resJson = await response.json();
        return resJson.message;
    } catch (error) {
        //console.log(error);
        return "Erreur lors de la création du contact, veuillez réessayer";
    }
}