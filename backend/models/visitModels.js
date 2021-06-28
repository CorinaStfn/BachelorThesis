const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
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
    },
    rating: {
        score: {
            type: Number,
            trim: true
        },
        description: {
            type: [String],
            trim: true
        }
    }
})


  var PlaceToVisit = mongoose.model('visiting_place', VisitSchema, '');
  module.exports = PlaceToVisit;