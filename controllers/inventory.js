const Inventory = require('../models/inventory');

const getInventoryItems = async (req, res) => {

    // #swagger.tags = ['Inventory']
    // #swagger.description = 'Get all inventory items in collection'

    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch(err) {
        res.status(500).json({message: err.message});
    }

}

const createInventoryItem = async (req, res) => {
    const inventory = new Inventory ({

        // #swagger.tags = ['Inventory']
        // #swagger.description = 'Create an inventory item in collection'

        // Functionality - Would be beneficial to determine if there is a record already in the database, and if it is, up the quantity instead for inventory items.
        category: req.body.category,
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        quantity: req.body.quantity,
    })

    try {
        const newInventoryItem = await inventory.save();
        res.status(201).json(newInventoryItem);
    } catch(err) {
        res.status(400).json({message: err.message});

    }

}


module.exports = {
    getInventoryItems,
    createInventoryItem
}