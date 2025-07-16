import express from 'express';
import { addSweet,deleteSweet } from '../controllers/sweetController.js';

const router = express.Router();
router.post('/', addSweet);

router.delete('/:id', deleteSweet);


export default router;
