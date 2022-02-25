//Aqui van los middleware de los contactos
import contact from '../models/contact.js';

const existingContact = async (req, res, next) => {

    if(!req.body.name) return res.status(400).send({msg:"Incomplete data"});

    const existingThisContact = await contact.findOne({$and:[{name:req.body.name}, {phoneBookId:req.body.phoneBookId}]});

    if(existingThisContact) return res.status(400).send({msg:"This contact is already registered in this phone book"});

    next();
}

export default {existingContact};