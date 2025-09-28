const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ message: 'Hello, World!' });
  });
});