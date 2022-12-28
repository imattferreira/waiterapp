import Category from "../entities/category";
import { HttpRequest, HttpResponse } from "../interfaces";

interface CategoryInput {
  name: string;
  description: string;
  image_url: string;
}

class CategoryController {
  async create(req: HttpRequest, res: HttpResponse) {
    if (!req.body) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: 'json body are required'
      });
    }

    const { name, description, image_url: imageUrl } = req.body as CategoryInput;

    if (!(name && description && imageUrl)) {
      return res.status(400).send({
        status: 'error',
        code: 400,
        message: '[name], [description] and [image_url] are required',
      });
    }

    // TODO
    // if (isUrlValid(imageUrl)) {}

    const categoryAlreadyExists = await Category.findOne({ name });

    if (categoryAlreadyExists) {
      return res.status(409).send({
        status: 'error',
        code: 409,
        message: '[name] already exists'
      });
    }

    const category = await Category.create({ description, imageUrl, name });

    return res.status(201).send({ category });
  }

  async listAll(req: HttpRequest, res: HttpResponse) {}

  async findById(req: HttpRequest, res: HttpResponse) {}

  async findByName(req: HttpRequest, res: HttpResponse) {}

  async update(req: HttpRequest, res: HttpResponse) {}

  async delete(req: HttpRequest, res: HttpResponse) {}
}

export default new CategoryController();
