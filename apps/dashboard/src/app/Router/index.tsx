import { Routes, Route } from "react-router-dom";
import OrdersPage from "../../ui/pages/Orders";

function Router() {
  return (
    <Routes>
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default Router;
