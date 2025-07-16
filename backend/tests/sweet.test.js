import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../app.js';
import * as model from '../models/sweetModel.js';

beforeEach(() => {
  model.set([]);
});

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