const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.json('Home')
})


app.listen(process.env.PORT || port)