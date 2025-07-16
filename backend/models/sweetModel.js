let sweets = [];

export const getAll = () => sweets;
export const add = (sweet) => sweets.push(sweet);
export const find = (id) => sweets.find(s => s.id === id);
export const set = (list) => { sweets = list; };
