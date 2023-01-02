import { toBRLCurrency } from "../../../../../app/lib/formatter";
import { priceText, title, container, qty } from "./styles.css";

type ProductListItemProps = {
  img: string;
  quantity: number;
  name: string;
  price: number;
};

function ProductListItem({ img, quantity, name, price }: ProductListItemProps) {
  return (
    <article className={container}>
      <img src={img} alt={`Imagem do produto ${name}`} className={img} />
      <span className={qty}>{quantity}x</span>
      <div>
        <h4 className={title}>{name}</h4>
        <p className={priceText}>{toBRLCurrency(price)}</p>
      </div>
    </article>
  );
}

export default ProductListItem;
