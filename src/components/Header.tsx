import { Link } from "react-router-dom";
import { useProducts } from "./ProductProvider";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const { products } = useProducts();

  console.log("Products in Header:", products);
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
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/user-registration">User Registration</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/1">Product Details</Link>
        <Link to="/products/1/reviews">Product Reviews</Link>
        <Link to="/cart" className="flex items-center gap-1 relative">
          <ShoppingCart />
          <span className="h-4 w-4 absolute -top-1 -right-1 rounded-full bg-yellow-500 text-sm text-black flex items-center justify-center">
            {products.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
