import { useEffect, useState } from 'react';
import axios from '../services/api';
import SweetCard from '../components/SweetCard';
import SweetForm from '../components/SweetForm';

const Dashboard = () => {
  const [sweets, setSweets] = useState([]);
  const [filters, setFilters] = useState({ name: '', category: '', minPrice: '', maxPrice: '', sortBy: '' });

  const buildQuery = () => {
    const queryParams = [];
    if (filters.name) queryParams.push(`name=${filters.name}`);
    if (filters.category) queryParams.push(`category=${filters.category}`);
    if (filters.minPrice) queryParams.push(`minPrice=${filters.minPrice}`);
    if (filters.maxPrice) queryParams.push(`maxPrice=${filters.maxPrice}`);
    if (filters.sortBy) queryParams.push(`sortBy=${filters.sortBy}`);
    return queryParams.length ? `/sweets/search?${queryParams.join('&')}` : '/sweets';
  };

  const fetchSweets = async () => {
    const res = await axios.get(buildQuery());
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, [filters]);

  const handleAdd = async (data) => {
    await axios.post('/sweets', data);
    fetchSweets();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/sweets/${id}`);
    fetchSweets();
  };

  const handlePurchase = async (id, qty) => {
    try {
      await axios.post(`/sweets/${id}/purchase`, { quantity: qty });
      fetchSweets();
    } catch (error) {
      alert(error.response?.data?.error || 'Error purchasing sweet');
    }
  };

  const handleRestock = async (id, qty) => {
    try {
      await axios.post(`/sweets/${id}/restock`, { quantity: qty });
      fetchSweets();
    } catch (error) {
      alert(error.response?.data?.error || 'Error restocking sweet');
    }
  };

  return (
    <div>
      <SweetForm onAdd={handleAdd} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {sweets.map((s) => (
          <SweetCard
            key={s.id}
            sweet={s}
            onDelete={handleDelete}
            onPurchase={handlePurchase}
            onRestock={handleRestock}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;