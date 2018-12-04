const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/tecnicos', (req, res, next) => {
  res.render('tecnicos');
});


module.exports = router;
