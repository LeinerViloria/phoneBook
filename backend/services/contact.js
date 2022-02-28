//Aqui va la logica de los contactos 
import contact from '../models/contact.js';

const phoneBookFull = async (id) => {
    const limit = 10;//Limite de contactos
    const contacts = await contact.find({phoneBookId:id});

    return contacts.length<limit ? true : false;
}

export default {phoneBookFull};