// dependencies
var csv = require('csv-parser')
var fs = require('fs')
var format = require('date-format')
var request = require('request')
var emoji = require('node-emoji')

// sendMessage function:
// parameters: Away team, Home team, and Game time.
//   tells the bot to send a message
function sendMessage(away, home, time) {
  var options = {
    url: 'https://api.groupme.com/v3/bots/post',
    method: 'POST',
	form: { 'bot_id':'123456789abcdevghijklmnop', // !IMPORTANT! enter your GroupMe Bot ID here!
			'text':away +
				   ' @ ' +
				   home +
				   ' ' +
				   time +
				   ' ' +
				   emoji.get('ice_hockey_stick_and_puck') +
				   emoji.get('ice_skate') +
				   emoji.get('musical_note')
		  }
	}
	request(options, function(error, response, body) {
	  if(!error && response.statusCode == 200) {
	    console.log(body);
	  }
	})
}

// main function:
//   Creates todays date and compares it against the csv file.
//   If there is a match, run the sendMessage function 
var todaysDate = format.asString('yyyy-MM-dd' ,new Date())
fs.createReadStream('Schedule.csv')
  .pipe(csv())
  .on('data', function (data){ 
    if (data.DATE == todaysDate){
		sendMessage(data.AWAY, data.HOME, data.TIME);
    }
})
