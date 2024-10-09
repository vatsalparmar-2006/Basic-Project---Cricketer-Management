const mongoose = require('mongoose');

const cricketerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    country : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    role : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('CricketerModel.js',cricketerSchema, 'Cricketers');
