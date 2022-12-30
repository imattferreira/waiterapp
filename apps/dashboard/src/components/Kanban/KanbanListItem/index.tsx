import { useMemo } from "react";
import type { Order } from "../../../entities/Order";
import { container, counterDisplay, tableTitle } from "./styles.css";

type KanbanListItemProps = Omit<Order, "status"> & {};

function KanbanListItem({ products, table }: KanbanListItemProps) {
  const count = useMemo(
    () => products.reduce((acc, { quantity }) => acc + quantity, 0),
    [products]
  );

  return (
    <div className={container}>
      <h4 className={tableTitle}>{table}</h4>
      {/* TODO choose singular or plural */}
      <p className={counterDisplay}>{count} items</p>
    </div>
  );
}

export default KanbanListItem;
