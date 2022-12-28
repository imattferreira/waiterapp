import categoryController from './controller/category-controller';
import orderController from './controller/order-controller';
import productController from './controller/product-controller';
import { DoneFn, Opts, Server } from '../interfaces';

function routes(router: Server, opts: Opts, done: DoneFn) {
  router.post('/categories', categoryController.create);
  router.get('/categories/:id', categoryController.findById);
  router.get('/categories', categoryController.listAll);

  router.post('/products', productController.create);
  router.get('/products/:id', productController.findById);
  router.get('/products', productController.listAll);

  router.post('/orders', orderController.create);
  router.get('/orders/:id', orderController.findById);
  router.get('/orders', orderController.listAll);
  router.patch('/orders/:id', orderController.changeStatus);

  done();
}

export default routes;
