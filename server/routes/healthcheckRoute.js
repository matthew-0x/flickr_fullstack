const express = require ('express');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/', (req, res) =>
  res.status(200).send('OK')
);

module.exports= router;
