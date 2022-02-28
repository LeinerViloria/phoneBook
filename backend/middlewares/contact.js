//Aqui van los middleware de los contactos
import contact from "../models/contact.js";

// const existingContact = async (req, res, next) => {
//   if (!req.body.name) return res.status(400).send({ msg: "Incomplete data" });

//   const existingThisContact = await contact.findOne({
//     $and: [
//       { name: new RegExp([req.body.name], "i") },
//       { phoneBookId: req.body.phoneBookId },
//     ],
//   });

//   if (existingThisContact)
//     return res
//       .status(400)
//       .send({ msg: "This contact is already registered in this phone book" });

//   next();
// };

const existingContact = async (req, res, next) => {
  let searchContact = await contact.find({ phoneBookId: req.body.phoneBookId });
  let array = [];
  for (let i = 0; i < searchContact.length; i++) {
    let saveName = searchContact[i].name.replace(/ /g, "");
    array.push(saveName);
  }
  if (!array.includes(req.body.name.replace(/ /g, ""))) return next();
  return res.status(400).send({ message: "This contact is already registered in this phone book"});

};

export default { existingContact };
