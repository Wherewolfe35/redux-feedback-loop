const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

//get feedback from database
router.get('/', (req, res) => {
  console.log('getting from database');
  let queryText = `SELECT * FROM "feedback";`;
  pool.query(queryText).then((result) => {
    console.log('Got this from database', result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error in GET',error);
    res.sendStatus(500);
  })
})