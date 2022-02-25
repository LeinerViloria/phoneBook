//Aqui van la logica de contactos 
import contact from '../models/contact.js';

const addContact = async (req, res) => {
    if(!req.body.tel && !req.body.cel) return res.status(400).send({msg:"Incomplete data"});

    let telephone = !req.body.tel ? "Sin numero" : req.body.tel;
    let cellphone = !req.body.cel ? "Sin numero" : req.body.cel;

    const schema = new contact({
        phoneBookId:req.body.phoneBookId,
        name:req.body.name,
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

export default {addContact, contactsList};