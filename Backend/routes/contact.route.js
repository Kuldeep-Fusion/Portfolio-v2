import express from 'express';
import { ContactData, ContactGet } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/create', ContactData);
router.get('/get-contact', ContactGet);

export default router;