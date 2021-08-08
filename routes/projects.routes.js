const {Router} = require('express')
const projectsController = require('../controllers/projectsController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createProjectValidators, addScriptsValidators, setFontConfigsValidators, formProcessingValidators } = require('../validators/projectValidators')

const router = Router()

router.post('/create-new-project', authMiddleware, createProjectValidators, projectsController.createProject)
router.put('/change-project', authMiddleware, createProjectValidators, projectsController.changeProject)
router.put('/add-scripts', authMiddleware, addScriptsValidators, projectsController.addProjectScripts)
router.put('/set-font-configs', authMiddleware, setFontConfigsValidators, projectsController.setFontConfigs)
router.put('/form-processing', authMiddleware, formProcessingValidators, projectsController.formProcessing)
router.delete('/delete-project/:projectId', authMiddleware, projectsController.deleteProject)
router.get('/projects', authMiddleware, projectsController.getAllProjects)


module.exports = router