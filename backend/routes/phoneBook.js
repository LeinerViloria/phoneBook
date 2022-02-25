import express from 'express';
import phoneBook from '../controllers/phoneBook.js';
import phoneBookMD from '../middlewares/phoneBook.js';

const APP = express.Router();
const nameVerification = phoneBookMD.nameVerification;

APP.post("/register", nameVerification, phoneBook.register);


export default APP;