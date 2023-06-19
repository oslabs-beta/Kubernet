const request = require('supertest');
const server = 'http://localhost:5050';
const testUsername = `test${Date.now()}`;

beforeAll(() => {
  return request(server)
    .post('/signup')
    .send({ username: testUsername, password: '12345' });
});

afterAll(() => {
  return request(server)
    .post('/delete')
    .send({ username: testUsername, password: '12345' });
});

describe('Backend Tests', () => {
  describe('Signup Route', () => {
    it('Should return 400 if username already exists', () => {
      return request(server)
        .post('/signup')
        .send({ username: testUsername, password: '12345' })
        .expect(400)
        .expect('Content-Type', /application\/json/);
    });
    it('Should invoke 401 with invalid signup', () => {
      return request(server)
        .post('/signup')
        .send({ username: 'test' })
        .expect(400)
        .expect('Content-Type', /application\/json/);
    });
  });

  describe('Login Route', () => {
    it('Should successfully login to a test account', () => {
      return request(server)
        .post('/login')
        .send({ username: testUsername, password: '12345' })
        .expect(201)
        .expect('Content-Type', /application\/json/);
    }),
      it('should invoke 401 with wrong user credentials', () => {
        return request(server)
          .post('/login')
          .send({ username: 'test' })
          .expect(401)
          .expect('Content-Type', /application\/json/);
      });
  });

  describe('Install Route', () => {
    it('Should return 200 status', () => {
      return request(server)
        .get('/install')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    }, 15000);
  });

  describe('Portforward', () => {
    it('Should return 200 status', () => {
      return request(server)
        .get('/portforward')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });
  });

  describe('Invalid endpoints', () => {
    it('Should return 404 Page not found if user queries an invalid endpoint', () => {
      return request(server)
        .get('/invalid')
        .expect(404)
        .expect('Content-Type', /text\/html/);
    });
  });
});
