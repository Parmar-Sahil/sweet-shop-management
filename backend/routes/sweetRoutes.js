import express from 'express';
import { addSweet,deleteSweet,getAllSweets,searchAndSort,purchaseSweet,restockSweet } from '../controllers/sweetController.js';

const router = express.Router();

router.post('/', addSweet);
router.delete('/:id', deleteSweet);
router.get('/', getAllSweets);
router.get('/search', searchAndSort);
router.post('/:id/purchase', purchaseSweet);
router.post('/:id/restock', restockSweet);


export default router;
