const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const db = require('../database/db');
const faker = require('faker');
const postgresDB = require('../Database/index.js')

let port = process.env.PORT || 3004;
let app = express();

app.use('/:id', express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 next();
});

app.get('/companies/:company_id', (req, res) => {
  postgresDB.getCompanyData(req.params.company_id, (err, results)=>{
    res.status(200).send(results)
  });
});

app.put('/editEarnings/:id/', (req, res) => {
  db.updateData(req.query.id, req.body, (err,results) => {
    console.log(results);
  });
})

app.put('/editRatings/:id/', (req, res) => {
  db.updateRatings(req.query.id, req.body, (err,results) => {
    console.log(results);
  });
})

app.post('/newRatings/:id/', (req, res) => {
  db.addRatings(req.query.id, req.body, (err,results) => {
    console.log(results);
  });
})

app.post('/newEarnings/:id/', (req, res) => {
  db.addRatings(req.query.id, req.body, (err,results) => {
    console.log(results);
  });
})


app.listen(port, function() {
	console.log(`listening on port ${port}`);
});