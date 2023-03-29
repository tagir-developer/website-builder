const { Router } = require('express');
const projectsController = require('../controllers/projectsController');

const router = Router();

router.get('/test', projectsController.getTestData);

module.exports = router;
