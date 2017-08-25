const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
//revise below for connection to database
const connectionString = "postgres://postgres:Archangel++@localhost/sim1";


var app = express();
app.use(bodyParser.json());
app.use(cors())


massive(connectionString).then(db => {
    app.set('db', db)

   app.get('db').init.seed_file().then(res => {
        console.log(res)
    })

}).catch(err => {
    console.log(err)
})



app.get('/api/getbins', (req, res) => {
    req.app.get('db').getBin().then(bin => {
        res.send(bin);
    })
})

app.post('/api/addbins', (req, res) => {
    let { name, price} = req.body;
    req.app.get('db').addBin([name, price]).then(bin => {
        res.send(bin)
    })
})


app.listen(3010, () => {
    console.log('Listening on port 3010');
})