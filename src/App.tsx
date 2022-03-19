import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDisplay from "./pages/CarDisplay";
import CartPage from "./pages/CartPage";
import CarDetail from "./components/CarDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/cars/:id" element={<CarDisplay />} />
    </Routes>
  );
}

export default App;
