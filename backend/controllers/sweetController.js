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




//delete controller


export const deleteSweet = (req, res) => {
  const { id } = req.params;

  const sweet = model.find(id);
  if (!sweet) {
    return res.status(404).json({ error: 'Sweet not found' });
  }

  model.deleteSweet(id);
  res.status(200).json({ message: 'Sweet deleted successfully' });
};
