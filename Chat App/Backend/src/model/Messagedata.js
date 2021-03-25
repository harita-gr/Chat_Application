const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/chatapp?retryWrites=true&w=majority');

//Schema
const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    isForwarded:Boolean,
    message:String,
    image:String,
    // date:Date,
    date:{type:Date , default:Date.now},
    room:String
    
});

//Model
var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;