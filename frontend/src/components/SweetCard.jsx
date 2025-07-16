const SweetCard = ({ sweet, onDelete, onPurchase, onRestock }) => {
  const handleQty = (action) => {
    const qty = parseInt(prompt(`Enter quantity to ${action}`));
    if (!qty || qty < 1) return;
    action === 'purchase' ? onPurchase(sweet.id, qty) : onRestock(sweet.id, qty);
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold">{sweet.name}</h2>
      <p className="text-sm text-gray-600">{sweet.category}</p>
      <p className="text-sm">Price: ₹{sweet.price}</p>
      <p className="text-sm">Stock: {sweet.quantity}</p>
      <div className="mt-2 space-x-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleQty('purchase')}>Purchase</button>
        <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => handleQty('restock')}>Restock</button>
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(sweet.id)}>Delete</button>
      </div>
    </div>
  );
};

export default SweetCard;