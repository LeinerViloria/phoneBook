import mongoose from 'mongoose';

const dbConnection = async () =>{
    try {
        mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connection is success");
    } catch (error) {
        console.log("Error in the database connection");
    }
}

export default {dbConnection};