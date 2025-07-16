import express from 'express';
import { addSweet,deleteSweet,getAllSweets,searchAndSort } from '../controllers/sweetController.js';

const router = express.Router();
router.post('/', addSweet);

router.delete('/:id', deleteSweet);
router.get('/', getAllSweets);

router.get('/search', searchAndSort);


export default router;
