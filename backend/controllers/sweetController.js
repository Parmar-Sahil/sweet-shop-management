import * as model from '../models/sweetModel.js';


// add sweet controller

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



// view sweets

export const getAllSweets = (req, res) => {
  const sweets = model.getAll();
  res.status(200).json(sweets);
};


// search and sort controller


export const searchAndSort = (req, res) => {
  let sweets = model.getAll();

  const { name, category, minPrice, maxPrice, sortBy } = req.query;

  if (name) {
    sweets = sweets.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (category) {
    sweets = sweets.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (minPrice) {
    sweets = sweets.filter(s => s.price >= parseFloat(minPrice));
  }

  if (maxPrice) {
    sweets = sweets.filter(s => s.price <= parseFloat(maxPrice));
  }

  if (sortBy && ['name', 'price', 'quantity'].includes(sortBy)) {
    sweets.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }

  res.status(200).json(sweets);
};



// purchase controller

export const purchaseSweet = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const sweet = model.find(id);
  if (!sweet) {
    return res.status(404).json({ error: 'Sweet not found' });
  }

  if (sweet.quantity < quantity) {
    return res.status(400).json({ error: 'Not enough stock' });
  }

  sweet.quantity -= quantity;
  res.status(200).json(sweet);
};



//restock controller

export const restockSweet = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const sweet = model.find(id);
  if (!sweet) {
    return res.status(404).json({ error: 'Sweet not found' });
  }

  sweet.quantity += quantity;
  res.status(200).json(sweet);
};

