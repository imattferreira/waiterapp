import { Routes, Route } from "react-router-dom";
import HomePage from "../../ui/pages/home";
import LoginPage from "../../ui/pages/login";
import OrdersPage from "../../ui/pages/orders";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default Router;
