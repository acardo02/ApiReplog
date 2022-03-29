const { Router } = require('express');
const router = Router();

const { Client } = require('pg');

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}});

client.connect();

router.get('/api/spareParts', async (req, res) => {
    const response = await client.query('SELECT * FROM sparePart ORDER BY id ASC');
    res.status(200).json(response.rows);
    res.send('HOLANDA');
});

router.get('/api/getOne/:aName',  async (req, res) => {
    let aName = req.params.aName;
    const response = await client.query('SELECT * FROM sparePart WHERE name = $1', [aName])
    res.status(200).json(response.rows);
});

module.exports = router;