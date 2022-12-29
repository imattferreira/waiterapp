import { model, Schema } from "mongoose";

const Category = model(
  "Category",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  })
);

export default Category;
