import express from 'express'
import { GetUser, PostLogin, PostRegister } from '../controllers/user.controller.js';
const router = express.Router();

router.post('/register', PostRegister);
router.post('/login', PostLogin);
router.get('/:id', GetUser);

export default router;