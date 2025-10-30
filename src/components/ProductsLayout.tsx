import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
