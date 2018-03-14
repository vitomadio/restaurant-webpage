// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {
	const env = { 
		name: process.env.NAME,
		navLogo: process.env.NAV_LOGO,
		facebook: process.env.FACEBOOK,
		instagram: process.env.INSTAGRAM,
		yelp: process.env.YELP,
		address: process.env.ADDRESS,
		phone: process.env.PHONE,
		hoursEarly: process.env.HOURS_EARLY,
		hoursLate: process.env.HOURS_LATE, 
		favIcon: process.env.FAVICON
		
	}

 	const data = {
 		env: env,
 		cdn: process.env.TURBO_CDN,
 		greeting: "welcome to my restaurant"
 	}

 	turbo.pageData('home')
 	.then(pageConfig => {
 		console.log(JSON.stringify(pageConfig))
 		data['page'] = pageConfig
 	 	res.render('index', data)	
 	})
 	.catch(err => {
 		res.render('ERROR: '+err.message)
 	})

	// res.render('index', data)
})


module.exports = router
