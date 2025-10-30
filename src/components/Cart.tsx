import { useNavigate } from "react-router-dom";
import { useProducts } from "./ProductProvider";
import { Eye, Trash2 } from "lucide-react";

const Cart = () => {
  const { products, removeProduct } = useProducts();
  const navigate = useNavigate();

  const removeProductFromCart = (id: number) => {
    removeProduct(id);
  };

  const onProductClickHandler = (id: number) => {
    navigate(`/products/${id}`);
  };

  if (products.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">
        Your Cart - {products.length} items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <section
            key={product.id}
            className="mb-4 p-4 border border-gray-300 rounded shadow"
          >
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <div className="flex justify-end gap-2 mt-2">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded cursor-pointer hover:bg-blue-600"
                onClick={() => onProductClickHandler(product.id)}
              >
                <Eye size={16} />
              </button>

              <button
                className="bg-red-500 text-white py-1 px-3 rounded cursor-pointer hover:bg-red-600"
                onClick={() => removeProductFromCart(product.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Cart;
