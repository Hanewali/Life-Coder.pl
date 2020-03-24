const request = require('request');

console.log("test");

exports.handler = function(event, context, callback){
	var e = JSON.parse(event.body);

	console.log("test2");
	const { CLOUDFLARE_API_KEY: apikey } = process.env;

	console.log("Netlify Env: ", apikey);

	console.log("payload", payload);

	callback(null, {statusCode: 200});
}
