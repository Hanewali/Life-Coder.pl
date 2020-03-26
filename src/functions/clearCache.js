const https = require('https');


exports.handler = function(event, context, callback){
	//var e = JSON.parse(event.body);
	const { CLOUDFLARE_API_KEY: apikey } = process.env;

	const data = JSON.stringify({
		'purge_everything': true
	});

	const options = {
		hostname: 'https://api.cloudflare.com',
		port: 443,
		path: '/client/v4/zones/8248231716cb84721a509111e1c2c6b3/purge_cache',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'X-Auth-Email' : 'jakub@rumpel.pl',
			'X-Auth-Key' : apikey
		}
	};

	const reuqest = https.request(options, res => {
		console.log('statusCode: ${res.statusCode}')

		res.on('data', d => {
			console.log(d);
		})
	})

	request.on('error', error => {
		console.log(error);
	})

	request.write(data);
	request.end();
}
