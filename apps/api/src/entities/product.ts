import { model, Schema } from 'mongoose';

const Product = model('Product', new Schema({
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
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  ingredients: {
    type: [{
      name: {
       type: String,
       required: true,
      },
      imageUrl: {
        type: String,
        required: false,
      }
    }],
  }
}));

export default Product;
