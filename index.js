const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
    res.sendfile('./login.html');
});

app.post('/send', urlencodedParser, function(req, res){
    res.send('your name: ' + req.body.name);
})

app.listen(3000, () => console.log('listening on port 3000'));