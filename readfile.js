var fs = require('fs');
var randomID=6

fs.readFile('comics.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    //console.log(data);
	var data=data.split('\n');		
	var lnk=data[randomID]
	console.log(lnk);
});