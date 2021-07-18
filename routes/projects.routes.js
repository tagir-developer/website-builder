const {Router} = require('express')
const projectsController = require('../controllers/projectsController')
const { createProjectValidators } = require('../validators/projectValidators')

const router = Router()

router.post('/create-new-project',  createProjectValidators, projectsController.createProject)


module.exports = router