const request = require('request');


exports.handler = function(event, context, callback){
	//var e = JSON.parse(event.body);
	const { CLOUDFLARE_API_KEY: apikey } = process.env;

	const options = {
		url: 'https://api.cloudflare.com/client/v4/zones/8248231716cb84721a509111e1c2c6b3/purge_cache',
		method: 'POST',
		headers: {
			'X-Auth-Email' : 'jakub@rumpel.pl',
			'X-Auth-Key' : apikey
		},
		body: {
			'purge_everything': true
		}

	}

	request(options, 
	function(error, response, body){
		console.log(error);
		console.log(response);
		console.log(body);
		// if(!error && response.statusCode == 200){
		// 	console.log('Succesfuly cleared cloudFlare cache');
		// 	callback(null, {statusCode: 200});
		// } else {
		// 	console.log('There was an error during cloudFlare cache clearing');
		// 	callback(error, { statusCode: response.statusCode, body: body});
		// }
	});
}
