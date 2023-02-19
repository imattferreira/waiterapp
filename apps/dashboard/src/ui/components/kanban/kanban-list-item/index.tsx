import { lazy, Suspense, useCallback, useMemo, useState } from "react";

import type { Order } from "@/app/entities/order";

import Title from "../../title";
import { container, counterDisplay, tableTitle } from "./styles.css";

const OrderModal = lazy(() => import("@/ui/components/modal/order-modal"));

type KanbanListItemProps = Omit<Order, "status"> & {};

function KanbanListItem({ products, table }: KanbanListItemProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const count = useMemo(
    () => products.reduce((acc, { quantity }) => acc + quantity, 0),
    [products]
  );

  function onClick() {
    setModalOpen(true);
  }

  const onModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      {isModalOpen && (
        <Suspense>
          <OrderModal
            table={table}
            status="IN_PRODUCTION"
            isOpen
            onClose={onModalClose}
          />
        </Suspense>
      )}
      <button className={container} onClick={onClick}>
        <Title size="size7" className={tableTitle}>
          {table}
        </Title>
        {/* TODO choose singular or plural */}
        <p className={counterDisplay}>{count} items</p>
      </button>
    </>
  );
}

export default KanbanListItem;
