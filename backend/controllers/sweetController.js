import * as model from '../models/sweetModel.js';

export const addSweet = (req, res) => {
  const { id, name, category, price, quantity } = req.body;

  if (!id || !name || !category || !price || !quantity) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (model.find(id)) {
    return res.status(409).json({ error: 'Sweet with this ID already exists.' });
  }

  model.add({ id, name, category, price, quantity });
  res.status(201).json({ id, name, category, price, quantity });
};
