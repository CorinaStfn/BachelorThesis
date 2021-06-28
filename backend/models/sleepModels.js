const mongoose = require('mongoose');

const SleepSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true
    },
    shortDescription: {
        rooms: {
            type: String,
            trim: true
        },
        features: {
            type: String,
            trim: true
        }
    },
    longDescription: {
        type: String,
        required:true,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    coordinates: {
            lat: {
                type: Number,
                required:true,
                trim: true
            },
            lng: {
                type: Number,
                required:true,
                trim: true
            }
    },
    mainImage: {
        type: String,
        required: true,
        trim: true
    },
    allImages: {
        type: [String],
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


  var PlaceToSleep = mongoose.model('sleeping_place', SleepSchema, '');
  module.exports = PlaceToSleep;