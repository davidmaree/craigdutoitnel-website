export type Section = "slimming" | "lifestyle" | "both";

export interface Product {
  id: string;
  section: Section;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}
