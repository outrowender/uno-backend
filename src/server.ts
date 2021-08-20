import express from 'express'

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.post('/room', function(req, res) {

    const username = req.headers['username']

    //TODO; código para criar a sala

    res.send(`olá ${username}, esse é o link da sala: TODO`);
});

app.listen(5000, () => {
    console.info(`Server is running in http://localhost:5000`)
})