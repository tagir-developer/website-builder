const {Router} = require('express')
const projectsController = require('../controllers/projectsController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createProjectValidators } = require('../validators/projectValidators')

const router = Router()

router.post('/create-new-project', authMiddleware, createProjectValidators, projectsController.createProject)
router.get('/projects', authMiddleware, projectsController.getAllProjects)


module.exports = router