var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var fileObj;

app.use('/api/', bodyParser.json());       // to support JSON-encoded bodies
app.use('/api/', bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/savedata', (req, res) => {
  console.log('Entra en savedata');
  res.set('Access-Control-Allow-Origin', null);

  fs.readFile(path.join(__dirname, '/server_data/info.txt'), (err, fileData) => {
    if (!!err && err.code == 'ENOENT') {
      // If file doesn't exist, create file and initialize the fileObj
      fs.closeSync(fs.openSync(path.join(__dirname, '/server_data/info.txt'),'w'));
      fileObj = {};
    } else {
      // If file exist, parse de fileData into an object
      fileObj = JSON.parse(fileData);
    }

    fileObj[req.body.user] = {
        name: req.body.name,
        user: req.body.user,
        repos: req.body.repos};

    console.log('Saving ' + req.body.user  + '...');
    fs.writeFile(
        path.join(__dirname, '/server_data/info.txt'),
        JSON.stringify(fileObj, null, 2),
        (err) => {

      if (err) throw err;
      console.log('Info saved successfully');
      console.log('->\n' + JSON.stringify(fileObj, null, 2));
      res.send('Received info for ' + req.body.name + '. Saved');
    });

  });

});

app.post('/api/getdata', (req, res) => {
  console.log('Entra en getdata')
  res.set('Access-Control-Allow-Origin', null);

  fs.readFile(path.join(__dirname, '/server_data/info.txt'), (err, fileData) => {
    if (err) throw err;
    fileObj = JSON.parse(fileData);
    res.send(fileObj);
  });
});

app.listen(5000, function () {
  console.log('Server listening on port 5000.');
});