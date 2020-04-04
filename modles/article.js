const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fdc-article',{ useNewUrlParser: true , useUnifiedTopology: true });

const Schema = mongoose.Schema;

const articleSchema = new Schema({
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
    }
    
});

module.exports = mongoose.model('Article',articleSchema);
