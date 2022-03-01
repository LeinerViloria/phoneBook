import express from 'express';
import contact from '../controllers/contact.js';
import contactMD from '../middlewares/contact.js';
import phoneBookMD from '../middlewares/phoneBook.js';
import validId from '../middlewares/validId.js';

const APP = express.Router();
const phoneBookId = phoneBookMD.getPhoneBookIdByName;
const existingContact = contactMD.existingContact;
const notChanges = contactMD.notChanges;
const existingPhoneBook = phoneBookMD.existingPhoneBook;
const existingNameContact = contactMD.existingName;

APP.post("/addContact", phoneBookId, existingContact, contact.addContact);
APP.get("/contactList/:_phoneBookId", validId, existingPhoneBook, contact.contactsList);
APP.get("/searchContact/:_phoneBookId/:name", validId, existingPhoneBook, contact.searchContact);
APP.delete("/deleteContact/:_contactId", validId, contact.deleteContact);
APP.put("/updateContact", notChanges, existingNameContact, contact.updateContact);

export default APP;