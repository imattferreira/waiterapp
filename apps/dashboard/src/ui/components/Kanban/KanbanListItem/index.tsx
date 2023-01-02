import { useMemo } from "react";
import type { Order } from "../../../../app/entities/Order";
import { container, counterDisplay, tableTitle } from "./styles.css";

type KanbanListItemProps = Omit<Order, "status"> & {};

function KanbanListItem({ products, table }: KanbanListItemProps) {
  const count = useMemo(
    () => products.reduce((acc, { quantity }) => acc + quantity, 0),
    [products]
  );

  function onClick() {
    // openModal();
  }

  return (
    <>
    <button className={container} onClick={onClick}>
      <h4 className={tableTitle}>{table}</h4>
      {/* TODO choose singular or plural */}
      <p className={counterDisplay}>{count} items</p>
    </button>
    </>
  );
}

export default KanbanListItem;
