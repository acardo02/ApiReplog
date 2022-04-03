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

router.get('/api/getOne/:aStock',  async (req, res) => {
    let aStock = req.params.aStock;
    
  pool.query(
    'SELECT * FROM spare_part WHERE stock = $1',[aStock],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).json(results.rows)
    }
  )
});

module.exports = router;