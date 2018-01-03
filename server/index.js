require('dotenv').config({ silent: true });
require('isomorphic-fetch');

const express = require('express');
const app = express();
const knex = require('./database');
const path = require('path');
const config = require('../config.js');

app.use(express.static(__dirname + '/../build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/marks/:mark_id', (req, res, next) => {
  knex('marks')
    .where({ mark_id: req.params.mark_id.toUpperCase() })
    .then(marks => {
      if (marks.length === 0) {
        return res.status(404).json({ });
      }

      res.json(marks[0]);
    })
    .catch(err => {
      return next(err);
    });
});

app.get('/places', (req, res, next) => {
  const { latitude, longitude } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=50000&type=hardware_store&key=${
    config.PLACES
  }`;

  fetch(url)
    .then(r => r.json())
    .then(json => {
      res.json(json);
    });
});

if (!module.parent) {
  app.listen(process.env.PORT || 7777, () => {
    console.log(`SERVER IS LIVE ON port ${process.env.PORT || 7777}`);
  });
}

module.exports = app;
