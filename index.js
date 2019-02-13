const express = require('express')
var bodyParser = require('body-parser')


const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));



var cities = []


const PORT = process.env.PORT || 3000


app.get('/cities', (req, res) => {
    res.status(200).json(cities)
})





app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


