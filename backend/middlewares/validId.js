//Para validar que un id tenga un correcto formato
import mongoose from 'mongoose';

const idValidation = async(req, res, next) => {
    let isValidPhoneId = true, isValidContactId=true;

    if(req.params["_phoneBookId"]){
        isValidPhoneId = mongoose.Types.ObjectId.isValid(req.params["_phoneBookId"]);
    }
    if(req.params["_contactId"]){
        isValidContactId = mongoose.Types.ObjectId.isValid(req.params["_contactId"]);
    }
    return !isValidPhoneId || !isValidContactId ? res.status(400).send({msg:"Invalid Id"}) : next();
}

const idValidationByPost = async(req, res, next) => {
    if(!req.body.phoneBookId) return res.status(400).send({msg:"PhoneBook Id required"});

    let isValidPhoneId = mongoose.Types.ObjectId.isValid(req.body.phoneBookId);

    return !isValidPhoneId ? res.status(400).send({msg:"Invalid Id"}) : next();
}

export default {idValidation, idValidationByPost};