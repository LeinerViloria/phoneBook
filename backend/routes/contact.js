import express from 'express';
import contact from '../controllers/contact.js';
import contactMD from '../middlewares/contact.js';
import phoneBookMD from '../middlewares/phoneBook.js';
import validId from '../middlewares/validId.js';

const APP = express.Router();
const phoneBookId = phoneBookMD.getPhoneBookIdByName;
const existingContact = contactMD.existingContact;

APP.post("/addContact", phoneBookId, existingContact, contact.addContact);
APP.get("/contactList/:_phoneBookId", validId, contact.contactsList);
APP.get("/searchContact/:_phoneBookId/:name", validId, contact.searchContact);
APP.delete("/deleteContact/:_phoneBookId/:_contactId", validId, contact.deleteContact);

export default APP;