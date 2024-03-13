const express = require('express');
const app = express();
port = 5000;
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './view/index.html'));
  });
app.get('/sanju',function(req,res){
    console.log("ram routing");
    res.sendFile(path.join(__dirname,'./view/sanju.html'))
})

app.listen(port, console.log(`port listen 5000 ${port}`));



