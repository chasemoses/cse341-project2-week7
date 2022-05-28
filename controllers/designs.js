const Design = require('../models/design');

const getDesigns = async (req, res) => {

    // #swagger.tags = ['Designs']
    // #swagger.description = 'Get all designs in collection'

    try {
        const designs = await Design.find();
        res.status(200).json(designs);
    } catch(err) {
        res.status(500).json({message: err.message});
    }

}

const createDesignItem = async (req, res) => {
    const design = new Design ({

        // #swagger.tags = ['Designs']
        // #swagger.description = 'Create design item and save in design collection'

        // Functionality - Would be beneficial to determine if there is a record already in the database, and if it is, up the quantity instead for inventory items.
        name: req.body.name,
        material: req.body.material,
        price: req.body.price
    })

    try {
        const newDesignItem = await design.save();
        res.status(201).json(newDesignItem);
    } catch(err) {
        res.status(400).json({message: err.message});

    }

}


module.exports = {
    getDesigns,
    createDesignItem
}