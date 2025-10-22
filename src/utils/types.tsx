export interface ProductProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: BroadcastChannel;
  weight: number;
  thumbnail: string;
  availabilityStatus: string;
  images: string[];
}
