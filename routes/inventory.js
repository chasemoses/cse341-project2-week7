const router = require('express').Router();


// Require Controller
const inventory = require('../controllers/inventory');

// GET Products
router.get('/inventory', inventory.getInventoryItems);


// // GET Product
// router.get('/products/:id', products.getProduct);


// POST Product (This should be restricted as we don't want customers creating products.)
router.post('/inventory', inventory.createInventoryItem);

// // Delete Product
// router.delete('products:id', products.deleteProduct);

// // Update Product (Probably restrict this to authorized users.)
// router.put('/products/:id', products.updateProduct);





module.exports = router;