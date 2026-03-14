export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'ceremonial' | 'culinary' | 'premium';
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

