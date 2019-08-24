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

//POST feedback to database
router.post('/', (req, res) => {
  console.log('in POST', req.body);
  let feedback = req.body;
  let queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
  VALUES($1, $2, $3, $4);`;
  pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
  .then((result) => {
    console.log('POST successful');
    res.sendStatus(201);
  }).catch((error) => {
    console.log('POST error', error);
    res.sendStatus(500);
  })
})

//DELETE selected feedback from database
router.delete('/:id', (req, res) => {
  console.log('in delete', req.params.id);
  let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    console.log('DELETE successful');
    res.sendStatus(200);
  }).catch((error) => {
    console.log('DELETE error', error);
    res.sendStatus(500);
  })
})

module.exports = router;