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


export default {register};