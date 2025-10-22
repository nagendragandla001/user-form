import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductProps } from "../utils/types";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();

  const getproduct = async (id: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const _product = await response.json();
      setProduct(_product);
      console.log(_product);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    if (id) {
      getproduct(id);
    }
  }, [id]);

  return (
    <section>
      <h2>{product?.title}</h2>
      <div>
        <img
          src={product?.thumbnail}
          alt={product?.title}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
