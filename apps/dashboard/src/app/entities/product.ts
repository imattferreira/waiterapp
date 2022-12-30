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
