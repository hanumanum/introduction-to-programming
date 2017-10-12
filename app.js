const express = require('express');
const path = require('path');
const app = express();

app.use('/codegroundjs', express.static(__dirname + '/node_modules/codegroundjs/'));
app.use('/jotted', express.static(__dirname + '/node_modules/jotted/'));
app.use('/examples', express.static(__dirname + '/examples/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3033, function () {
  console.log('Example app listening on port 3033!')
})
