//Aqui van la logica de contactos 
import contact from '../models/contact.js';
import contactService from '../services/contact.js';

const addContact = async (req, res) => {
    if(!req.body.tel && !req.body.cel) return res.status(400).send({msg:"Incomplete data"});

    let canSave = await contactService.phoneBookFull(req.body.phoneBookId);

    if(!canSave) return res.status(500).send({msg:"The phone book is full"});

    let telephone = !req.body.tel ? "Sin numero" : req.body.tel;
    let cellphone = !req.body.cel ? "Sin numero" : req.body.cel;

    const schema = new contact({
        phoneBookId:req.body.phoneBookId,
        name:req.body.name.toLowerCase(),
        tel:telephone,
        cel:cellphone
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({msg:"Internal error"});

    res.status(200).json(result);
}

const contactsList = async (req, res) => {
    if(!req.params["_phoneBookId"]) return res.status(400).send({msg:"Incomplete data"});
    const contacts = await contact.find({phoneBookId:req.params["_phoneBookId"]});

    if(contacts.length===0) return res.status(500).send({msg:"Contacs not found in this phone book"});

    res.status(200).json(contacts);
}

const searchContact = async (req, res) => {
    if(!req.params["name"]) return res.status(400).send({msg:"Incomplete data"});

    const contactSearched = await contact.findOne({ $and:[{phoneBookId:req.params["_phoneBookId"]}, {name: new RegExp (req.params["name"], "i")}]}) ;

    if(!contactSearched) return res.status(500).send({msg:"Contact not found"});

    res.status(200).json(contactSearched);
}

const deleteContact = async (req, res) => {
    const contactToDelete = await contact.findByIdAndDelete(req.params["_contactId"], {$and:[{phoneBookId:req.params["_phoneBookId"]}]});

    if(!contactToDelete) return res.status(500).send({msg:"Error to delete"});

    res.status(200).send({msg:"Contact deleted in this phone book"});
}

export default {addContact, contactsList, searchContact, deleteContact};