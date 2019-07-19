const mongoose = require('mongoose');
const openingTimeSchema = new mongoose.Schema({
	days: {
		type: String,
		required: true
	},
	opening: String,
	Closing: String,
	closed: {
		type: Boolean,
		required: true
	}
});
const reviewSchema = new mongoose.Schema({
	author: String,
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 5
	},
	reviewText: String,
	createOn:{
		type: Date,
		'default': Date.now
	}
});
const locationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: String,
	rating: {
		type: Number,
		'default': 0,
		min: 0,
		max: 5
	},
	facilities: [String],
	coord: {
		type: { type: String },
		coordinates: [Number]
	},
	openingTimes: [openingTimeSchema],
	reviews: [reviewSchema]
});
locationSchema.index({coords: '2dsphere'});

mongoose.model('Location', locationSchema);

