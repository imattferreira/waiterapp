import { Routes, Route } from "react-router-dom";
import HomePage from "../../ui/pages/Home";
import OrdersPage from "../../ui/pages/Orders";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default Router;
