import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  priceNum: number;
  price: string;
  img: string;
  desc?: string;
  discount?: string;
  platforms?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
  discountTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: '1',
      title: "Cyber Odyssey: Resurgence",
      desc: "Edição Deluxe • Digital",
      priceNum: 249.90,
      price: "R$ 249,90",
      discount: "15%",
      platforms: "WINDOWS / PS5",
      img: "https://lh3.googleusercontent.com/aida/ADBb0ugBjJ9Z4d0Z7rhinBAMBD63qKesTzubtNwqqkphIDBSM1Eo0UAsQ9LQYH0KwZJsfuOxsMfw8LEIe3fIvRoTazxO8yKtBKSxm-kntgA75qb4z8bNhXR14XsRm8Mz3cdcS-6Ye3PRShc8YhOdYnkY_m2ZznHPQiq1GCPoNmiu-WN8zv8wPxu5BBiP0D5elBAya8FF3Jv7UAy8UllfVx1HIHWNHiLbe4pLuG2i7MnU68PaEzUGEJ4jDs9RIR9uVNxxksjM1bJ506tUyIQ"
    },
    {
      id: '2',
      title: "Ethereal Realm: Chronicles",
      desc: "Passe de Temporada • Digital",
      priceNum: 129.90,
      price: "R$ 129,90",
      platforms: "XBOX / PC",
      img: "https://lh3.googleusercontent.com/aida/ADBb0uidjQ6SNDysXFePUTv4mOT9WE0GBWJFV6L6xw9Qu0HJgG99m0YI4w0JTvHdyfzgc29xrjpuXwHD37rzw5qc4UGOQfbjB8T62uUcugyynCYJ7-LkAzn3s5LjxS5PNTFLJ4gNm6K6sBml-5aXu3pNlv5rGnYCUN3KuQzTxmhTeKPT2ZE9z8Nv1HtBskiP7TM4WQNrv9sVyUVW8YS0HSYf_8YnI0ptaMrdf_vxWMxOD1B_86OjfBjzt9jskXCDl2dJ_p1XZ-Mf9VVGkQ"
    },
    {
      id: '3',
      title: "Starborn Command: Elite",
      desc: "Jogo Base • Digital",
      priceNum: 199.90,
      price: "R$ 199,90",
      platforms: "CROSS-PLATFORM",
      img: "https://lh3.googleusercontent.com/aida/ADBb0uhlXdHuNkFKYs5UVejCKNAD3Sj6xLzq5j5Jby0594U57FjM-SRaBEUW3qJcEgjXqlCjYN0Cm68yOweC-WdGLSlqYKNsqC5-fE0sr51RxwVIVfHeoMVonvwSCTPWxbD1YIX7wjbeNF3IzEdTa8P6Aejog5R141OdKNyUFa-YmkytsOeFjIyKD7Usdr-ZCbKXPBUhEdUpZ269O82rDMAquZUUZFq8-KIQcy8UHUpcio_Iq2cPRsoPePCuLyxF-lhjW1F4TuFJld7Lru8"
    }
  ]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.priceNum, 0);
  const discountTotal = cart.reduce((acc, item) => {
    if (item.discount) {
       const pct = parseInt(item.discount.replace('%', ''));
       return acc + (item.priceNum * pct / 100);
    }
    return acc;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, discountTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
