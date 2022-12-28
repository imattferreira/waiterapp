import Product from "../entities/product";
import { HttpRequest, HttpResponse } from "../interfaces";

interface ProductInput {
  name: string;
  description: string;
  image_url: string;
  price: number;
  category_id: string;
  ingredients: Array<{
    name: string;
    image_url?: string;
  }>;

}

interface ProductParams {
  id: string;
}

class ProductController {
  async create(req: HttpRequest, res: HttpResponse) {
    if (!req.body) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: 'json body are required'
      });
    }

    const {
      name,
      description,
      image_url: imageUrl,
      category_id: categoryId,
      ingredients,
      price,
    } = req.body as ProductInput;

    if (!(name && description && imageUrl && categoryId && ingredients && price)) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[name], [description], [image_url], [categoryId], [ingredients] and [price] are required',
      });
    }

    if (!ingredients.every((ingredient) => !!ingredient.name)) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[ingredient.name] are required',
      });
    }

    // TODO
    // if (isUrlValid(imageUrl)) {}

    const productAlreadyExists = await Product.findOne({ name });

    if (productAlreadyExists) {
      return res.status(409).send({
        status: 'error',
        code: 409,
        message: '[name] already exists'
      });
    }

    const product = await Product.create({
      description,
      imageUrl,
      name,
      category: categoryId,
      ingredients,
      price: price * 100,
    });

    return res.status(201).send({ product });
  }

  async listAll(req: HttpRequest, res: HttpResponse) {
    const products = await Product.find().populate('category').lean();

    return res.send({
      products: products.map((product) =>
        ({...product, price: product.price / 100})
      )
    });
  }

  async findById(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as Pick<ProductParams, 'id'>;

    // TODO
    // if (!isIdValid(id)) {}

    const product = await Product.findById(id).populate('category').lean();

    if (!product) {
      return res.status(404).send({
        status: 'error',
        code: 404,
        message: '[product] not found'
      });
    }

    return res.status(200).send({
      product: { ...product, price: product.price / 100 },
    });
  }

  // async findByName(req: HttpRequest, res: HttpResponse) {}

  // async update(req: HttpRequest, res: HttpResponse) {}

  // async delete(req: HttpRequest, res: HttpResponse) {}
}

export default new ProductController();
