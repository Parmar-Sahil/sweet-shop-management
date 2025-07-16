# 🍬 Sweet Shop Management System

A full-stack web application to manage sweets in a shop — with real-time inventory updates, purchase/restock capabilities, and advanced search and sort features.

---

--> 🚀 Features

✅ Add New Sweets
✅ View All Available Sweets
✅ Delete Sweets from Inventory
✅ Purchase (Reduce Stock)
✅ Restock (Increase Stock)
✅ Filter by Name, Category, Price Range
✅ Sort by Name, Price, or Quantity
✅ Fully Responsive UI (Tailwind CSS)

---

--> 🖼️ UI Preview

<img width="1349" height="638" alt="image" src="https://github.com/user-attachments/assets/61bcbc7e-ace2-42f4-a331-e695b3055593" />

---

--> 🧱 Tech Stack

| Frontend     | Backend           | Tools & Styling |
| ------------ | ----------------- | --------------- |
| React + Vite | Node.js + Express | Tailwind CSS    |
| Axios        | Jest (unit tests) | React Hooks     |

---

--> 🛠️ Installation

    --> 🔧 Backend Setup

```bash
cd backend
npm install
node server.js
```

This will start the backend server on:
📍 `http://localhost:3001`

    --> 🌐 Frontend Setup

```bash
cd sweet-shop-frontend
npm install
npm run dev
```

App will open at:
📍 `http://localhost:5173`

---

--> 📦 API Endpoints

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/sweets`              | Fetch all sweets     |
| GET    | `/sweets/search?...`   | Search & sort sweets |
| POST   | `/sweets`              | Add a new sweet      |
| DELETE | `/sweets/:id`          | Delete a sweet       |
| POST   | `/sweets/:id/purchase` | Purchase a sweet     |
| POST   | `/sweets/:id/restock`  | Restock a sweet      |

---

--> 🔍 Search & Sort Query Parameters

* `name=Barfi` → Search by name
* `category=Milk` → Filter by category
* `minPrice=20&maxPrice=40` → Filter by price range
* `sortBy=name|price|quantity` → Sort the result

Example:

```
GET /sweets/search?category=Milk&minPrice=20&sortBy=price
```

---

--> 🧪 Testing (Backend)

```bash
npm test
```

Covers all core functionality (add, delete, search, purchase, restock).

---

--> 📸 Sample Sweet Data

```json
{
  "id": "101",
  "name": "Kaju Katli",
  "category": "Nut-Based",
  "price": 50,
  "quantity": 15
}
```

You can add more sweets via the UI or Postman.

---

--> 📁 Project Structure

```plaintext
backend/
  ├── models/
  ├── controllers/
  ├── routes/
  ├── tests/
  ├── app.js
  └── server.js

sweet-shop-frontend/
  ├── src/
      ├── components/
      ├── pages/
      ├── services/
      ├── App.jsx
      └── main.jsx
```

> Made with ❤️ for Incubyte Sweet Shop Kata Challenge
