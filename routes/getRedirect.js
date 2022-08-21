const UrlModel = require('../models/UrlModel');
const Router = require('express');

const router = new Router();

router.get('/:code', async (req, res) => {
	try {
		const url = await UrlModel.findOne({ codeUrl: req.params.code });
		if (url) {
			return res.redirect(url.longUrl);
		}

		return res.status(404).json('No URL Found');

	} catch (e) {
		res.status(500).json('Server Error');
		console.log('Error: ', e.message);
	}
});

module.exports = router;