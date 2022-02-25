import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/db.js';

//Se llaman las rutas
import phoneBook from './routes/phoneBook.js';
import contact from './routes/contact.js';

dotenv.config();

const APP = express();
APP.use(cors());
APP.use(express.json());
APP.use("/api/phoneBook", phoneBook);
APP.use("/api/contact", contact);

APP.listen(process.env.PORT, ()=>
    console.log("Running in the port:", process.env.PORT)
)

db.dbConnection();