//Aqui van los directorios
import phoneBook from '../models/phoneBook.js';

const register = async (req, res) =>{
    const schema = new phoneBook({
        name:req.body.name
    });
    const result = await schema.save();
    if(!result) return res.status(500).send({msg:"Internal error"});
    res.status(200).json(result);
}

const freeSpaces = async (req, res) => {
    const limit = 3;
    const phoneBookContacts = await contact.find({phoneBookId:req.params["_phoneBookId"]});

    if(!phoneBookContacts) return res.status(500).send({msg:"Contacts not found in this phone book"});

    if((limit - phoneBookContacts.length)===0) return res.status(500).send({msg:"This phone books is full"});

    const message = (limit - phoneBookContacts.length)>1 ? "This phone book have "+(limit - phoneBookContacts.length)+" free spaces" : "This phone book have "+(limit - phoneBookContacts.length)+" free space";

    res.status(200).send({msg:message});
}

const phoneBooksList = async (req, res) => {
    const phoneBooks = await phoneBook.find();

    if(phoneBooks.length===0) return res.status(500).send({msg:"Phone books not found"});

    res.status(200).json(phoneBooks);
}

export default {register, freeSpaces, phoneBooksList};