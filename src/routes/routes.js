const { Router } = require('express');
const router = Router();

const { Pool } = require('pg');

const dotenv = require('dotenv');
const req = require('express/lib/request');
dotenv.config();

const pool = new Pool( {
  host: 'dpg-cgljgk3h4hskd42asc60-a.frankfurt-postgres.render.com',
  port: 5432,
  database: 'replog',
  user: 'root',
  password: '7zvwoqHHti4IqbO0SEm6tGAmfjXdJsZK',
  ssl: { rejectUnauthorized: false}
});

router.get('/api/spareParts', async (req, res) => {
    pool.query('SELECT * FROM spare_parts ORDER BY sap ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
});
'SELECT * FROM sparePart WHERE name = $1'

router.get('/api/getOne/:sap',  async (req, res) => {
    let aSap = req.params.sap;
    
  pool.query(
    'SELECT * FROM spare_parts WHERE sap = $1',[aSap],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).json(results.rows)
    }
  )
});

router.get('/api/getOne/NumPart/:aNumPart',  async (req, res) => {
  let aNumPart = req.params.aNumPart;
  
pool.query(
  'SELECT * FROM spare_parts WHERE num_part = $1',[aNumPart],
  (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).json(results.rows)
  }
)
});

router.get('/api/getImages/:sap', async (req, res) => {
   let aSap = req.params.sap;

   pool.query(
      'SELECT i.url FROM images AS i JOIN spare_parts AS s ON id_spare_part=s.sap WHERE s.sap= $1',
      [aSap],
      (error, results) => {
        if(error) {
          throw error
        }
        res.status(201).json(results.rows)
      }     
   )
})

module.exports = router;  