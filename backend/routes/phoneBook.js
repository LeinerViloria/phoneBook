import express from 'express';
import phoneBook from '../controllers/phoneBook.js';
import phoneBookMD from '../middlewares/phoneBook.js';
import validId from '../middlewares/validId.js';

const APP = express.Router();
const validIdByGet = validId.idValidation;
const nameVerification = phoneBookMD.nameVerification;
const existingPhoneBook = phoneBookMD.existingPhoneBook;

APP.post("/register", nameVerification, phoneBook.register);
APP.get("/phoneBooksList", phoneBook.phoneBooksList);
APP.get("/freeSpaces/:_phoneBookId", validIdByGet, existingPhoneBook, phoneBook.freeSpaces);


export default APP;