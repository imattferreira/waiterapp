import Category from "../entities/category";
import type { HttpRequest, HttpResponse } from "../../interfaces";

interface CategoryInput {
  name: string;
  description: string;
  image_url: string;
}

interface CategoryParams {
  id: string;
}

class CategoryController {
  async create(req: HttpRequest, res: HttpResponse) {
    if (!req.body) {
      return res.status(400).send({
        status: "error",
        code: 400,
        message: "json body are required",
      });
    }

    const {
      name,
      description,
      image_url: imageUrl,
    } = req.body as CategoryInput;

    if (!(name && description && imageUrl)) {
      return res.status(400).send({
        status: "error",
        code: 400,
        message: "[name], [description] and [image_url] are required",
      });
    }

    // TODO
    // if (isUrlValid(imageUrl)) {}

    const categoryAlreadyExists = await Category.findOne({ name });

    if (categoryAlreadyExists) {
      return res.status(409).send({
        status: "error",
        code: 409,
        message: "[name] already exists",
      });
    }

    const category = await Category.create({ description, imageUrl, name });

    return res.status(201).send({ category });
  }

  async listAll(req: HttpRequest, res: HttpResponse) {
    const categories = await Category.find();

    return res.send({ categories });
  }

  async findById(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as Pick<CategoryParams, "id">;

    // TODO
    // if (!isIdValid(id)) {}

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).send({
        status: "error",
        code: 404,
        message: "[category] not found",
      });
    }

    return res.status(200).send({ category });
  }

  // async findByName(req: HttpRequest, res: HttpResponse) {}

  // async update(req: HttpRequest, res: HttpResponse) {}

  // async delete(req: HttpRequest, res: HttpResponse) {}
}

export default new CategoryController();
