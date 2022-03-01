import express from 'express';
import phoneBook from '../controllers/phoneBook.js';
import phoneBookMD from '../middlewares/phoneBook.js';
import validId from '../middlewares/validId.js';

const APP = express.Router();
const nameVerification = phoneBookMD.nameVerification;
const existingPhoneBook = phoneBookMD.existingPhoneBook;

APP.post("/register", nameVerification, phoneBook.register);
APP.get("/phoneBooksList", phoneBook.phoneBooksList);
APP.get("/freeSpaces/:_phoneBookId", validId, existingPhoneBook, phoneBook.freeSpaces);


export default APP;