/* GET 'home' page */
const homelist = (req, res) => {
	res.render('location-list', { title: 'Home' });	
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
	res.render('location-info', { title: 'Location info' });	
};

/* GET 'Add review' page */
const addReview = (req, res) => {
	res.render('location-review-form', { title: 'Add Review' });	
};

module.exports = {
	homelist,
	locationInfo,
	addReview
};