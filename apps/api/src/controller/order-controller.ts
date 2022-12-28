import Order, { OrderStatusEnum } from "../entities/order";
import { HttpRequest, HttpResponse } from "../interfaces";

interface OrderInput {
  table: string;
  status: OrderStatusEnum;
  products: Array<{
    product_id: string;
    quantity: number;
  }>;
}

interface ChangeOrderStatusInput {
  status: OrderStatusEnum;
}

interface OrderParams {
  id: string;
}

class OrderController {
  async create(req: HttpRequest, res: HttpResponse) {
    if (!req.body) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: 'json body are required'
      });
    }

    const {
      products,
      status,
      table,
    } = req.body as OrderInput;

    if (!(table && products && status)) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[name], [description], [image_url], [categoryId], [ingredients] and [price] are required',
      });
    }

    if (!products.every((product) => !!product.product_id)) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[product.product_id] are required',
      });
    }

    if (!OrderStatusEnum[status]) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[status] should be one of `WAITING`, `IN_PRODUCTION` or `DONE`'
      });
    }

    // TODO improve
    const tableAlreadyHasOrder = await Order.findOne({ table });

    if (tableAlreadyHasOrder) {
      return res.status(409).send({
        status: 'error',
        code: 409,
        message: '[table] already has order'
      });
    }

    const order = await Order.create({
      products: products.map(({ quantity, product_id }) => ({ quantity, product: product_id })),
      status,
      table
    });

    return res.status(201).send({ order });
  }

  async listAll(req: HttpRequest, res: HttpResponse) {
    const orders = await Order.find().populate('products.product');

    return res.send({ orders });
  }

  async findById(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as Pick<OrderParams, 'id'>;

    // TODO
    // if (!isIdValid(id)) {}

    const order = await Order.findById(id).populate('products.product');

    if (!order) {
      return res.status(404).send({
        status: 'error',
        code: 404,
        message: '[order] not found'
      });
    }

    return res.status(200).send({ order });
  }

  async changeStatus(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as Pick<OrderParams, 'id'>;
    const { status } = req.body as ChangeOrderStatusInput;

    // TODO
    // if (!isIdValid(id)) {}

    if (!OrderStatusEnum[status]) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[status] should be one of `WAITING`, `IN_PRODUCTION` or `DONE`'
      });
    }

    await Order.findByIdAndUpdate(id, { status });

    return res.status(204).send();
  }

  // async findByName(req: HttpRequest, res: HttpResponse) {}

  // async update(req: HttpRequest, res: HttpResponse) {}

  // async delete(req: HttpRequest, res: HttpResponse) {}
}

export default new OrderController();
