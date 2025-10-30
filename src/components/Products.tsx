import React, { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "./ProductProvider";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = React.useState<any[]>([]);
  // const [filteredProducts, setFilteredProducts] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const { addProduct, products: cartProducts } = useProducts();

  // Always returns the value that is memoized
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      // setFilteredProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const onProductClickHandler = useCallback(
    (id: string) => {
      navigate(`/products/${id}`);
    },
    [navigate]
  );

  const onAddToCartHandler = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addProduct(product);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // useEffect(() => {
  //   const filtered = memoizedData.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [search]);

  return (
    <div className="p-4 flex flex-col gap-1">
      <input
        type="text"
        placeholder="Search products..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
