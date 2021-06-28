const mongoose = require('mongoose');

const ActivitiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true
    },
    mainDescription: {
        type: String,
        required:true,
        trim: true
    },
    mainImage: {
        type: String,
        required: true,
        trim: true
    }
})


  var Activity = mongoose.model('activity', ActivitiesSchema, '');
  module.exports = Activity;