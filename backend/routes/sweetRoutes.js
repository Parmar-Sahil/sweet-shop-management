import express from 'express';
import { addSweet,deleteSweet,getAllSweets } from '../controllers/sweetController.js';

const router = express.Router();
router.post('/', addSweet);

router.delete('/:id', deleteSweet);
router.get('/', getAllSweets);


export default router;
