const router = require('express').Router();


// Require Controller
const design = require('../controllers/designs');

// GET Products
router.get('/designs', design.getDesigns);


// // GET Product
// router.get('/products/:id', products.getProduct);


// POST Product (This should be restricted as we don't want customers creating products.)
router.post('/designs', design.createDesignItem);

// // Delete Product
// router.delete('products:id', products.deleteProduct);

// // Update Product (Probably restrict this to authorized users.)
// router.put('/products/:id', products.updateProduct);





module.exports = router;