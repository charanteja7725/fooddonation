const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

// Routes
router.get('/', foodController.getAllFood);
router.get('/:id', foodController.getFoodById);
router.post('/', foodController.createFood);
router.put('/:id', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);
router.put('/:id/claim', foodController.claimFood);

module.exports = router;
