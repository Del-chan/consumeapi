var request = require('superagent');
var prompt = require('prompt');
var chalk = require('chalk');
require('dotenv').config();

prompt.start();

prompt.get(['city'], function(err, result){
	var apikey = process.env.OPENWEATHER_API_KEY
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${result.city}&units=metric&APPID=${apikey}`;

	request
	  .post(url)
	  .set('Accept', 'application/json')
	  .end(function(err, res){
		var result = `The weather today is ${res.body.weather[0].main}, The temperature is ${res.body.main.temp} degrees, and The humidity is ${res.body.main.humidity} percent`;
  		console.log(chalk.green(result));
  	});
});
