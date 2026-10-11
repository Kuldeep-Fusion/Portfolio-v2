import express from 'express';
import { 
    createProject, 
    getProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} from '../controllers/project.controller.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Public routes for fetching projects
router.route('/')
    .get(getProjects)
    .post(upload.single("image"), createProject);

router.route('/:id')
    .get(getProjectById)
    .put(upload.single("image"), updateProject)
    .delete(deleteProject);

// Keep the old route temporarily if frontend is still using it
router.get('/get-project', getProjects);
router.post('/create', upload.single("image"), createProject);

export default router;