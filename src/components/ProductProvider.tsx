import { createContext, useContext, useState } from "react";

interface ProductContextProps {
  products: any[];
  addProduct: (product: any) => void;
  removeProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextProps>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<any[]>([]);

  const addProduct = (product: any) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (id: number) => {
    const _products = products.filter((product) => product.id !== id);
    setProducts(_products);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
