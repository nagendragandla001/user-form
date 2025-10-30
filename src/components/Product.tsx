import { useNavigate } from "react-router-dom";
import { useProducts } from "./ProductProvider";

const Product = ({ product }: { product: any }) => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const onProductClickHandler = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <section
      onClick={onProductClickHandler}
      className="border border-gray-300 rounded-lg p-4 text-center shadow-sm bg-white transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-30 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <div className="flex justify-end gap-2">
        <button
          className="bg-indigo-500 text-white py-1 px-3 rounded hover:bg-green-600  cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            addProduct(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
