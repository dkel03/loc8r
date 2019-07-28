const request = require("request");
const apiOptions = {
	server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'http://loc8r-application.herokuapp.com';
	// production 즉 deploy했을 때 내 경로를 지정해주는 것임!!
}

/* GET 'home' page */
const renderHomepage = (req, res, requestbody) => {
	res.render('location-list', { 
		title: 'Loc8r - find a place to wrork with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for",
		locations: requestbody
	});	
};

const homelist = (req, res) => {
	const path = '/api/locations';
	const requestOptions = {
		url: `${apiOptions.server}${path}`,
		method: 'GET',
		json: {},
		qs: {
			lng: -0.7992599,
			lat: 51.378091,
			maxDistance: 20
		}
	};
	request(
		requestOptions,
		(err, response, body) => {
			renderHomepage(req, res, body);	
		}
	);
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', {
      title: 'Loc8r',
       pageHeader: {
        title: 'Starcups',
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: {lat: 51.455041, lng: -0.9690884},
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: ' SeungHa Song ',
            rating: 5,
            timestamp: '17 July 2019',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: ' SuChan Oh ',
            rating: 3,
            timestamp: '16 June 2019',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }
        ]
      }
    }
  );
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', {
      title: 'Review Starcups on Loc8r' ,
      pageHeader: { title: 'Review Starcups' }
    }
  );
};


module.exports = {
	homelist,
	locationInfo,
	addReview
};