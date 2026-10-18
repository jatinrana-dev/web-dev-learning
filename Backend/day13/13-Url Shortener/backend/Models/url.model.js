const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    orginalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
     timestamps: true
        }); 

        const urlModel = mongoose.model('Url', urlSchema);
        module.exports = urlModel;

