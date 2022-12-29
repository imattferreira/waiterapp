import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/orders" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
