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

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    "text" : '*Hello ' + userName + ', welcome! I\'ll be your guide.*',
	"username": "Heibot",
	"mrkdwn": true
	"attachments": [
        {
            "fallback": "Xkcd comic.",
            "color": "#36a64f",
            "pretext": "Here's a random comic",
            "author_name": "Xkcdbot",
            "author_link": "google.com",
            "author_icon": "https://imgs.xkcd.com/comics/proofs.png",
            "title": "XKCD Comic",
            "title_link": "https://api.slack.com/",
            "text": "Here's your comic",
            "fields": [
                {
                    "title": "Proofs",
                    "short": false
                }
            ],
            "image_url": "https://imgs.xkcd.com/comics/proofs.png",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Xkcd comics",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
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