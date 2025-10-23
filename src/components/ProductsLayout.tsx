import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gap: "20px",
          height: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            height: "100%",
          }}
        >
          <h3>Products Layout Sidebar</h3>
          <p>This is the sidebar content for the Products section.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
