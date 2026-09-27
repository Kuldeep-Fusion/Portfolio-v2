import Router from  'express';
import {DeleteProject, GetProjects, PostProject, } from '../controllers/project.controller.js'
import upload from '../middleware/upload.js'

const router = Router();

router.post('/create', upload.single("image"), PostProject);
router.get('/get-project', GetProjects);
router.delete("/:id", DeleteProject );


export default router;