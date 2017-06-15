var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stat Stacker' });
});

router.get('/:user/projects', function(req, res, next) {
  res.render('dashboard');
});

router.post('/:user/projects', function(req, res, next) {
  res.render('workspace');
});

router.get('/:user/projects/:project', function(req, res, next) {
  res.render('dashboard');
});

router.put('/:user/projects/:project', function(req, res, next) {
  res.render('workspace');
});

router.delete('/:user/projects/:project', function(req, res, next) {
  res.render('workspace');
});



module.exports = router;
