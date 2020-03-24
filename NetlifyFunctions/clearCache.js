const request = require('request');

exports.handler = function(event, context, callback){
	var e = JSON.parse(event.body);

	const { CLOUDFLARE_API_KEY: apikey } = process.env;

	console.log("Netlify Env: ", apikey);

	console.log("payload", payload);
}
