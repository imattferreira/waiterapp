import Fastify from 'fastify';
import mongoose from 'mongoose';
import categoryController from './controller/category-controller';
import orderController from './controller/order-controller';
import productController from './controller/product-controller';

const DATABASE_URL = 'mongodb://mongo:docker@localhost:27017';

const app = Fastify();

try {
  mongoose.connect(DATABASE_URL);
} catch {}

  app.post('/categories', categoryController.create);
  app.get('/categories/:id', categoryController.findById);
  app.get('/categories', categoryController.listAll);

  app.post('/products', productController.create);
  app.get('/products/:id', productController.findById);
  app.get('/products', productController.listAll);

  app.post('/orders', orderController.create);
  app.get('/orders/:id', orderController.findById);
  app.get('/orders', orderController.listAll);
  app.patch('/orders/:id', orderController.changeStatus);

  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
  });

