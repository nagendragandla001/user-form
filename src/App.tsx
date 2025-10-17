import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import User from "./components/User";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/user-registration" element={<User />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
