import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    phoneBookId:{type:mongoose.Schema.ObjectId, ref:"phonesBooks"},
    name:String,
    tel:String,
    cel:String,
    registerDate:{type:Date, default:Date.now}
});

const contact = mongoose.model("contacts", contactSchema);

export default contact;