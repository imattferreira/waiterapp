import Modal from "@/ui/components/modal";
import { OrderTranslatedStatusEnum } from "@/app/entities/order";
import { toBRLCurrency } from "@/app/lib/formatter";
import Button from "@/ui/components/button";

import ProductsList from "./products-list";
import {
  buttonsContainer,
  orderStatus,
  price,
  totalPriceWrapper,
} from "./styles.css";
import Title from "./title";

type OrderModal = {
  status: keyof typeof OrderTranslatedStatusEnum;
  table: string;
  isOpen?: boolean;
  onClose: () => void;
};

enum OrderStatusEnum {
  WAITING = "🕑 Aguardando",
  IN_PRODUCTION = "👩‍🍳 Em produção",
  DONE = "✅ Finalizado",
}

enum RightButtonTextEnum {
  WAITING = "Iniciar Pedido",
  IN_PRODUCTION = "Concluir Pedido",
  DONE = "Fechar",
}

function OrderModal({ table, status, onClose, isOpen = false }: OrderModal) {
  function onCancelClick() {}

  function onConfirmClick() {}

  return (
    <Modal title={table} isOpen={isOpen} onClose={onClose}>
      <section>
        <Title>Status do Pedido</Title>
        <p className={orderStatus}>{OrderStatusEnum[status]}</p>
      </section>
      <ProductsList products={[]} />
      <section className={totalPriceWrapper}>
        <Title>Total</Title>
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
