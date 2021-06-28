const mongoose = require('mongoose');

const eatAndCoffeeSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true
    },
    shortDescription: {
        cuisines: {
            type: String,
            trim: true
        },
        meals: {
            type: String,
            trim: true
        },
        specialDiets: {
            type: String,
            trim: true
        },
        features: {
            type: String,
            trim: true
        },
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


  var PlaceToEat = mongoose.model('eating_place', eatAndCoffeeSchema, '');
  module.exports = PlaceToEat;