export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  sold: number;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface User {
  username: string;
}
