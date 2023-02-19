import { Product } from "./product";

export enum OrderStatusEnum {
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
  DONE = "DONE",
}

export enum OrderTranslatedStatusEnum {
  WAITING = "🕑 Aguardando",
  IN_PRODUCTION = "👩‍🍳 Em produção",
  DONE = "✅ Finalizado",
}

type ProductOrder = {
  quantity: number;
  product: Product;
};

export type Order = {
  table: string;
  status: OrderStatusEnum;
  products: ProductOrder[];
};
