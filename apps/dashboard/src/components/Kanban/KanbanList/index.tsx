import type { Order } from "../../../entities/Order";
import KanbanListItem from "../KanbanListItem";
import {
  container,
  counterDisplay,
  listTitle,
  ordersWrapper,
  titleWrapper,
} from "./styles.css";

type KanbanListProps = {
  title: string;
  // icon: string;
  orders: Omit<Order, "status">[];
};

function KanbanList({ orders, title }: KanbanListProps) {
  const count = orders.length;

  return (
    <article className={container}>
      <div className={titleWrapper}>
        {/* {icon} */}
        <h3 className={listTitle}>{title}</h3>
        <div className={counterDisplay}>
          <span>{count}</span>
        </div>
      </div>
      <div className={ordersWrapper}>
        {orders.map(({ products, table }) => (
          <KanbanListItem key={table} products={products} table={table} />
        ))}
      </div>
    </article>
  );
}

export default KanbanList;
