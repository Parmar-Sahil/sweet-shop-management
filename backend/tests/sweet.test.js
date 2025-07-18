import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../app.js';
import * as model from '../models/sweetModel.js';

beforeEach(() => {
  model.set([]);
});


//add sweet test


test('adds a sweet', async () => {
  const res = await request(app).post('/sweets').send({
    id: '1',
    name: 'Kaju Katli',
    category: 'Nut-Based',
    price: 50,
    quantity: 10
  });

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.name, 'Kaju Katli');
});


// delete test

test('deletes a sweet', async () => {
  await request(app).post('/sweets').send({
    id: '2',
    name: 'Barfi',
    category: 'Milk',
    price: 25,
    quantity: 8
  });

  const res = await request(app).delete('/sweets/2');

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.message, 'Sweet deleted successfully');
});


// view test

test('views all sweets', async () => {
  // Add 2 sweets
  await request(app).post('/sweets').send({
    id: '3',
    name: 'Ladoo',
    category: 'Round',
    price: 20,
    quantity: 10
  });

  await request(app).post('/sweets').send({
    id: '4',
    name: 'Jalebi',
    category: 'Sugar',
    price: 15,
    quantity: 12
  });

  // Make GET request
  const res = await request(app).get('/sweets');

  assert.equal(res.statusCode, 200);
  assert.equal(Array.isArray(res.body), true);
  assert.equal(res.body.length, 2);
});


// search by name test

test('searches sweets by name', async () => {
  await request(app).post('/sweets').send({
    id: '5', name: 'Rasgulla', category: 'Milk', price: 30, quantity: 20
  });

  const res = await request(app).get('/sweets/search?name=rasgulla');

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.length, 1);
  assert.equal(res.body[0].name, 'Rasgulla');
});


//search by category

test('searches sweets by category', async () => {
  await request(app).post('/sweets').send({
    id: '6', name: 'Gulab Jamun', category: 'Milk', price: 40, quantity: 10
  });

  const res = await request(app).get('/sweets/search?category=Milk');

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.find(sweet => sweet.name === 'Gulab Jamun'));
});


// search by price range

test('searches sweets by price range', async () => {
  await request(app).post('/sweets').send({
    id: '7', name: 'Sandesh', category: 'Bengali', price: 20, quantity: 15
  });

  const res = await request(app).get('/sweets/search?minPrice=10&maxPrice=25');

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.find(sweet => sweet.name === 'Sandesh'));
});



//sort by price

test('sorts sweets by price', async () => {
  await request(app).post('/sweets').send({ id: '8', name: 'Imarti', category: 'Fried', price: 10, quantity: 5 });
  await request(app).post('/sweets').send({ id: '9', name: 'Kheer', category: 'Rice', price: 30, quantity: 5 });

  const res = await request(app).get('/sweets/search?sortBy=price');

  assert.equal(res.statusCode, 200);
  assert.ok(res.body[0].price <= res.body[1].price);
});


//purchase sweets test

test('purchases a sweet and reduces stock', async () => {
  await request(app).post('/sweets').send({
    id: '10',
    name: 'Kesar Peda',
    category: 'Milk',
    price: 25,
    quantity: 10
  });

  const res = await request(app).post('/sweets/10/purchase').send({
    quantity: 4
  });

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.quantity, 6); // 10 - 4 = 6
});


//insufficient stock  test

test('returns error if purchase quantity exceeds stock', async () => {
  await request(app).post('/sweets').send({
    id: '11',
    name: 'Cham Cham',
    category: 'Milk',
    price: 15,
    quantity: 3
  });

  const res = await request(app).post('/sweets/11/purchase').send({
    quantity: 5
  });

  assert.equal(res.statusCode, 400);
  assert.equal(res.body.error, 'Not enough stock');
});


//sweet not found test

test('returns error if sweet does not exist when purchasing', async () => {
  const res = await request(app).post('/sweets/999/purchase').send({
    quantity: 1
  });

  assert.equal(res.statusCode, 404);
  assert.equal(res.body.error, 'Sweet not found');
});


// restock sweet test

test('restocks a sweet and increases stock', async () => {
  await request(app).post('/sweets').send({
    id: '12',
    name: 'Besan Ladoo',
    category: 'Dry',
    price: 10,
    quantity: 5
  });

  const res = await request(app).post('/sweets/12/restock').send({
    quantity: 7
  });

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.quantity, 12); // 5 + 7 = 12
});


//restock non-existing sweet

test('returns error if sweet does not exist when restocking', async () => {
  const res = await request(app).post('/sweets/999/restock').send({
    quantity: 3
  });

  assert.equal(res.statusCode, 404);
  assert.equal(res.body.error, 'Sweet not found');
});

