const router = require('express').Router();


// Require Controller
const inventory = require('../controllers/inventory');

// GET Inventory items
router.get('/inventory', inventory.getInventoryItems);


// GET Inventory Item
router.get('/inventory/:id', inventory.getInventoryById, inventory.getInventoryItem);


// POST Inventory Item (This should be restricted as we don't want customers creating products.)
router.post('/inventory', inventory.createInventoryItem);

// Delete Inventory Item
router.delete('/inventory/:id', inventory.getInventoryById, inventory.deleteInventoryItem);

// Update Inventory Item (Probably restrict this to authorized users.)
router.put('/inventory/:id', inventory.getInventoryById, inventory.updateInventoryItem);





module.exports = router;