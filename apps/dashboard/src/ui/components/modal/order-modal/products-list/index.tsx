import ProductListItem from "./product-list-item";
import Title from "../title";
import { container } from "./styles.css";
import { Product } from "../../../../../app/entities/product";

type ProductsListProps = {
  products: Product[];
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <section>
      <Title>Itens</Title>
      <div className={container}>
        {/* {
            products.map(({ category, description, imageUrl, ingredients, name, price }) => (
              <ProductListItem img={imageUrl} quantity={quantity} name={name} price={price} />
            ))
          } */}
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
        <ProductListItem
          img="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
          quantity={1}
          name="Quatro Queijos"
          price={40}
        />
      </div>
    </section>
  );
}

export default ProductsList;
