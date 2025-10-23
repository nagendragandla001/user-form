import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        padding: "10px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>React Training</h1>
      <div>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/user-registration" style={{ margin: "0 10px" }}>
          User Registration
        </Link>
        <Link to="/products" style={{ margin: "0 10px" }}>
          Products
        </Link>
        <Link to="/products/1" style={{ margin: "0 10px" }}>
          Product Details
        </Link>
        <Link to="/products/1/reviews" style={{ margin: "0 10px" }}>
          Product Reviews
        </Link>
      </div>
    </header>
  );
};

export default Header;
