import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onProductClickHandler = (id: string) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h2>Products List - {filteredProducts.length}</h2>
      <input
        type="text"
        placeholder="Search products..."
        style={{
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #483232ff",
          width: "100%",
          maxWidth: "400px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onClick={() => onProductClickHandler(product.id)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
