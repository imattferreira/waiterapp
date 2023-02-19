import type { Order } from "../../../../app/entities/order";
import Title from "../../title";
import KanbanListItem from "../kanban-list-item";
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
        <Title size="size6" className={listTitle}>
          {title}
        </Title>
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
