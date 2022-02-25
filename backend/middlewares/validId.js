//Para validar que un id tenga un correcto formato
import mongoose from 'mongoose';

const idValidation = async(req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params["_phoneBookId"]);
    return !isValidId ? res.status(400).send({msg:"Invalid Id"}) : next();
}

export default idValidation;