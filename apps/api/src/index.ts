import Fastify from 'fastify';
import mongoose from 'mongoose';
import categoryController from './controller/category-controller';

const DATABASE_URL = 'mongodb://mongo:docker@localhost:27017';

const app = Fastify();

try {
  mongoose.connect(DATABASE_URL);
} catch {}

  app.post('/categories', categoryController.create);
  // app.delete('/categories', categoryController.delete);
  // app.get('/categories', categoryController.findById);
  // app.get('/categories', categoryController.findByName);
  app.get('/categories', categoryController.listAll);
  // app.upd('/categories', categoryController.update);

  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
  });

