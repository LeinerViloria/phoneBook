//Aqui van los middleware de los contactos
import contact from "../models/contact.js";

const existingContact = async (req, res, next) => {
  if (!req.body.name) return res.status(400).send({ msg: "Incomplete data" });

  const existingThisContact = await contact.findOne({
    $and: [{ name: req.body.name }, { phoneBookId: req.body.phoneBookId }],
  });

  if (existingThisContact)
    return res
      .status(400)
      .send({ msg: "This contact is already registered in this phone book" });

  next();
};

const doNotChanges = async (req, res, next) => {
  const changes = await contact.findOne({
    name: req.body.name,
    tel: req.body.tel,
    cel: req.body.cel,
  });

  return changes
    ? res.status(400).send({ message: "No changes were made" })
    : next();
};

export default { existingContact, doNotChanges };
