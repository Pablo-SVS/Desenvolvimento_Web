import Item from '../models/Item.js';

export const createItem = async (req, res) => {
  try {
    const item = await Item.create({ ...req.body, owner: req.user._id });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('owner', 'email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Adicione updateItem e deleteItem seguindo o mesmo padrão