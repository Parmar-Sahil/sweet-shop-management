let sweets = [
  {
    "id": "101",
    "name": "Kaju Katli",
    "category": "Nut-Based",
    "price": 50,
    "quantity": 15
  },
  {
    "id": "102",
    "name": "Gulab Jamun",
    "category": "Milk",
    "price": 25,
    "quantity": 30
  },
  {
    "id": "103",
    "name": "Jalebi",
    "category": "Fried",
    "price": 20,
    "quantity": 25
  },
  {
    "id": "104",
    "name": "Rasgulla",
    "category": "Milk",
    "price": 28,
    "quantity": 18
  },
  {
    "id": "105",
    "name": "Besan Ladoo",
    "category": "Dry",
    "price": 22,
    "quantity": 40
  },
  {
    "id": "106",
    "name": "Soan Papdi",
    "category": "Flaky",
    "price": 15,
    "quantity": 35
  },
  {
    "id": "107",
    "name": "Peda",
    "category": "Milk",
    "price": 30,
    "quantity": 20
  },
  {
    "id": "108",
    "name": "Halwa",
    "category": "Vegetarian",
    "price": 18,
    "quantity": 22
  },
  {
    "id": "109",
    "name": "Barfi",
    "category": "Milk",
    "price": 27,
    "quantity": 16
  },
  {
    "id": "110",
    "name": "Cham Cham",
    "category": "Milk",
    "price": 26,
    "quantity": 14
  }
]


export const getAll = () => sweets;
export const add = (sweet) => sweets.push(sweet);
export const find = (id) => sweets.find(s => s.id === id);
export const set = (list) => { sweets = list; };


export const deleteSweet = (id) => {
  const index = sweets.findIndex(s => s.id === id);
  if (index !== -1) {
    sweets.splice(index, 1);
  }
};
