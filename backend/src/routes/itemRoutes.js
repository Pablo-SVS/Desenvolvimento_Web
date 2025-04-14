import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.js';
import { createItem, getItems } from '../controllers/itemController.js';

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), createItem);
router.get('/', authenticate, getItems);

export default router;