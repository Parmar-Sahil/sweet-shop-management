let sweets = [];

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
