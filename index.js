/**
 * Created by wbokhari on 8/6/2016.
 */

var express = require('express');

var app = express();

app.get('/notes', function(req, res) {
    res.json({notes: "This is your notebook. Okay Edit this to start saving your notes!"})
});

app.listen(3000);
