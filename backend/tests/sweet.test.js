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
