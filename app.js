var express = require('express');
var bodyParser = require('body-parser');
 
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
  //var randomID=Math.floor((Math.random() * 1830) + 1);
  //fs = require('fs')
  /*fs.readFile("comics.txt", function(err, data){
	  if(err) throw err;
	  var data=data.split('\n');
	  var lnk=data[randomID]*/
	  
  }
  var botPayload = {
    //"text" : '*Hello ' + userName + ', welcome! I\'ll be your guide.*',
	//"username": "Heibot",
	//"mrkdwn": true
	"attachments": [
        {
            "fallback": "Xkcd comic. - https://imgs.xkcd.com/comics/proofs.png",
            "color": "#36a64f",
            "pretext": "Here's a random comic",
            "title": "XKCD Comic",
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