import express from 'express';
import contact from '../controllers/contact.js';
import contactMD from '../middlewares/contact.js';
import phoneBookMD from '../middlewares/phoneBook.js';
import validId from '../middlewares/validId.js';

const APP = express.Router();
const existingContact = contactMD.existingContact;
const validIdByGet = validId.idValidation;
const validIdByPost = validId.idValidationByPost;
const notChanges = contactMD.notChanges;
const existingPhoneBook = phoneBookMD.existingPhoneBook;
const existingNameContact = contactMD.existingName;

APP.post("/addContact", validIdByPost, existingContact, contact.addContact);
APP.get("/contactList/:_phoneBookId", validIdByGet, existingPhoneBook, contact.contactsList);
APP.get("/searchContact/:_phoneBookId/:name", validIdByGet, existingPhoneBook, contact.searchContact);
APP.delete("/deleteContact/:_contactId", validIdByGet, contact.deleteContact);
APP.put("/updateContact", notChanges, existingNameContact, contact.updateContact);

export default APP;