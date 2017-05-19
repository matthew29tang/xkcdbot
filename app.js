var express = require('express');
var bodyParser = require('body-parser');
var math = require('mathjs');
var fs = require('file-system');
var path = require('path');
var process = require('process');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/comic', function (req, res, next) {
  var userName = req.body.user_name;
  var randomID=Math.floor(Math.random() * 1830);
  var lnk=0;
  var d="hii";
  fs.readFile(path.join(process.cwd(),'comics.txt'), function(err, data) {  
	if (err) return res.status(200).json('"text":"fail"');
	var d=data.split('\n');		
	var lnk=d[randomID]
	});
  var botPayload = {
    //"text" : '*Hello ' + userName + ', welcome!*',
	//"username": "Heibot",
	//"mrkdwn": true
	"attachments": [
        {
            "fallback": "Xkcd comic. - https://imgs.xkcd.com/comics/proofs.png",
            "color": "#36a64f",
            "pretext": lnk+"Here's a random comic"+d,
            "title": process.cwd(),
            "title_link": "https://imgs.xkcd.com/comics/proofs.png",
            "text": "Here's your comic",
            "image_url": "https://imgs.xkcd.com/comics/proofs.png"
        }
    ]
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});