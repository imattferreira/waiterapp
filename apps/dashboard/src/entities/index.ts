export enum OrderStatusEnum {
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
  DONE = "DONE",
}

export type Product = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  ingredients: Array<{
    name: string;
    imageUrl?: string;
  }>;
};

export type ProductOrder = {
  quantity: number;
  product: Product;
};

export type Order = {
  table: string;
  status: OrderStatusEnum;
  products: ProductOrder[];
};
