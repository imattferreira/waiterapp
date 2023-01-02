import Modal from "..";
import Button from "../../Button";
import {
  container,
  buttonsContainer,
  img,
  orderStatus,
  price,
  qty,
  title,
  totalPriceWrapper,
  aPrice,
  aTitle,
  productsList,
} from "./styles.css";

type OrderModal = {
  status: keyof typeof OrderStatusEnum;
  table: string;
};

enum OrderStatusEnum {
  WAITING = "🕑 Aguardando",
  IN_PRODUCTION = "👩‍🍳 Em produção",
  DONE = "✅ Finalizado",
}

enum RightButtonTextEnum {
  WAITING = "🕑 Iniciar Pedido",
  IN_PRODUCTION = "Concluir Pedido",
  DONE = "Fechar",
}

const toBRLCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

type ProductItemProps = {
  // img: string;
  quantity: number;
  name: string;
  price: number;
};

function ProductItem({
  // img,
  quantity,
  name,
  price,
}: ProductItemProps) {
  return (
    <article className={container}>
      <img
        src="https://i.picsum.photos/id/110/48/40.jpg?hmac=X-fvDy0hnieTzbTq4seFqwAy6SvJ97PJmiM8mTatxvc"
        alt={`Imagem do produto ${name}`}
        className={img}
      />
      <span className={qty}>{quantity}x</span>
      <div>
        <h4 className={aTitle}>{name}</h4>
        <p className={aPrice}>{toBRLCurrency(price)}</p>
      </div>
    </article>
  );
}

function OrderModal({ table, status }: OrderModal) {
  function onCancelClick() {}

  function onConfirmClick() {}

  return (
    <Modal title={table} open>
      <section>
        <h4 className={title}>Status do Pedido</h4>
        <p className={orderStatus}>{OrderStatusEnum[status]}</p>
      </section>
      <section>
        <h4 className={title}>Itens</h4>
        <div className={productsList}>
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
          <ProductItem quantity={1} name="Quatro Queijos" price={40} />
        </div>
      </section>
      <section className={totalPriceWrapper}>
        <h4 className={title}>Total</h4>
        <p className={price}>{toBRLCurrency(120)}</p>
      </section>
      <div className={buttonsContainer}>
        <Button variant="secondary" onClick={onCancelClick}>
          Cancelar Pedido
        </Button>
        <Button onClick={onConfirmClick}>{RightButtonTextEnum[status]}</Button>
      </div>
    </Modal>
  );
}

export default OrderModal;
