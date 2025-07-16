import express from 'express';
import { addSweet,deleteSweet,getAllSweets,searchAndSort,purchaseSweet } from '../controllers/sweetController.js';

const router = express.Router();
router.post('/', addSweet);

router.delete('/:id', deleteSweet);
router.get('/', getAllSweets);

router.get('/search', searchAndSort);
router.post('/:id/purchase', purchaseSweet);


export default router;
