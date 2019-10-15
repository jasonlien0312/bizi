const express = require('express');
const app = express();

//routes
app.get('/',(req, res) =>{
    res.send("hello world lol.")
});
app.get('/api/users',(req,res) => {
    res.send(['jason','lenox','michael'])
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}...`)
});