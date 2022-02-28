//Aqui van los middleware de phoneBook

import phoneBook from '../models/phoneBook.js';

const nameVerification = async(req, res, next) => {
    if(!req.body.name) return res.status(400).send({msg:"Incomplete data"});
    const existingName = await phoneBook.findOne({name:req.body.name});
    console.log(existingName._id);
    if(existingName) return res.status(400).send({msg:"This phoneBook is already registered"});

    next();
}

const getPhoneBookIdByName = async (req, res, next) =>{
    if(!req.body.phoneBookName) return res.status(400).send({msg:"Incomplete data"});

    const thisPB = await phoneBook.findOne({name:req.body.phoneBookName});

    if(!thisPB) return res.status(400).send({msg:"Phone book not found"});

    req.body.phoneBookId = thisPB._id;

    next();
}


export default {nameVerification, getPhoneBookIdByName};