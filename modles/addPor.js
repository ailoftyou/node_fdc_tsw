const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fdc-article',{ useNewUrlParser: true , useUnifiedTopology: true });

const Schema = mongoose.Schema;

const productSchema = new Schema({
    
    author:{
        type:String,
        required:true
    },
    handline:{
        type:String,
        required:true
    },
    article:{
        type:String,
        required:true
    },
    abstract:{
        type:String
    },
    created_time:{
        type:Date,
        default:Date.now
    },
    
});

module.exports = mongoose.model('Addp',productSchema);
