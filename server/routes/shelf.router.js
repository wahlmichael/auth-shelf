const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated,  (req, res) => {
    const queryText = `SELECT * FROM "item"
                        ORDER BY "id";`;
    pool.query(queryText)
        .then((response => {
            res.send(response.rows)
        }))
        .catch((error) => {
            console.log('error in GET', error);
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id")
                        VALUES ($1, $2, $3);`;
    const queryValue = [req.body.description, req.body.image_url, req.user.id]
    pool.query(queryText, queryValue)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500);
        })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "item" WHERE id = $1 AND user_id = $2;`;
    const queryValue = [req.params.id, req.user.id]
    pool.query(queryText, queryValue)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('error in DELETE', error);
            res.sendStatus(500);
        })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;