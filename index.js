const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
    res.sendfile('./login.html');
});

app.post('/send', urlencodedParser, function(req, res){
    res.send('your name: ', req.body.name);
})

app.listen(port, () => console.log('listening on port ${port}'));