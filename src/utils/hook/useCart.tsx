'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CardParams {
  image: string;
  title: string;
  subtitle: string;
  value: number;
}

interface CartItem extends CardParams {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CardParams) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CardParams) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.title === item.title);
      if (itemExists) {
        return prevItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
