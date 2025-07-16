import { useState } from 'react';

const SweetForm = ({ onAdd, setFilters }) => {
  const [form, setForm] = useState({ id: '', name: '', category: '', price: '', quantity: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.category || !form.price || !form.quantity) return alert('All fields required');
    onAdd({ ...form, price: Number(form.price), quantity: Number(form.quantity) });
    setForm({ id: '', name: '', category: '', price: '', quantity: '' });
  };

  const handleFilterChange = (e) => setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-2">
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
        {['id', 'name', 'category', 'price', 'quantity'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="border p-2 rounded"
            type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
          />
        ))}
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
        <input type="text" name="name" placeholder="🔍 Search by name" onChange={handleFilterChange} className="border p-2 rounded" />
        <input type="text" name="category" placeholder="🎯 Category" onChange={handleFilterChange} className="border p-2 rounded" />
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} className="border p-2 rounded" />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} className="border p-2 rounded" />
        <select name="sortBy" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>
    </form>
  );
};

export default SweetForm;
