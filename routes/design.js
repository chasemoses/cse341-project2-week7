const router = require('express').Router();


// Require Controller
const design = require('../controllers/designs');

// GET Designs
router.get('/designs', design.getDesigns);


// // GET Design
router.get('/designs/:id', design.getDesignById, design.getDesign);


// POST Design (This should be restricted as we don't want customers creating Designs.)
router.post('/designs', design.createDesignItem);

// Delete Design
router.delete('/designs/:id', design.getDesignById, design.deleteDesign);

// Update Design (Probably restrict this to authorized users.)
router.put('/designs/:id', design.getDesignById, design.updateDesign);





module.exports = router;