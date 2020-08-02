import React from 'react';

var unirest = require('unirest');

var req = unirest(
	'GET',
	'https://api-football-v1.p.rapidapi.com/v2/lineups/157215'
);

req.headers({
	'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
	'x-rapidapi-key': 'cecc3a01f3msh3ad1f8c78be3775p163da2jsn14d409d6beee',
	useQueryString: true,
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
