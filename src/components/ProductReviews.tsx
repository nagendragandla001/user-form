import { useParams } from "react-router-dom";

const ProductReviews = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Reviews</h2>
      <p>This is the product reviews page for product ID: {id}</p>
    </div>
  );
};

export default ProductReviews;
