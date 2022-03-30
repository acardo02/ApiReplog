const { Router } = require('express');
const router = Router();

const { Pool } = require('pg');

const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}});

router.get('/api/spareParts', async (req, res) => {
    pool.query('SELECT * FROM sparePart ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
});
'SELECT * FROM sparePart WHERE name = $1'

router.get('/api/getOne/:aName',  async (req, res) => {
    let aName = req.params.aName;
    
  pool.query(
    'SELECT * FROM sparePart WHERE name = $1',[aName],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).json(results.rows)
    }
  )
});

module.exports = router;