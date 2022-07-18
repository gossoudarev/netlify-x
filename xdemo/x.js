const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => res.send(`
  <h1>Привет студентам от Netlify, Express.js и GossJS! ${req.originalUrl}</h1>
  <h2>${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}</h2>
`));
router.get('/login', (req, res) => res.json({ login: 'admin', route: req.originalUrl }));
router.get('/api/mpy/:n1/:n2', (req, res) => res.json({ result: req.params.n1 * req.params.n2 }));

app.use('/.netlify/functions/x', router);  // имя функции


module.exports = app;
module.exports.handler = serverless(app);
