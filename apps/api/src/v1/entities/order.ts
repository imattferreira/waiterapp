import { model, Schema } from "mongoose";

export enum OrderStatusEnum {
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
  DONE = "DONE",
}

const Order = model(
  "Order",
  new Schema({
    // TODO create entity of tables
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"],
      default: "WAITING",
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    },
  })
);

export default Order;
