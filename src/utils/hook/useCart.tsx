'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

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
  removeFromCart: (title: string) => void;
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

  const removeFromCart = (title: string) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.title === title);
      if (itemExists && itemExists.quantity > 1) {
        return prevItems.map((i) =>
          i.title === title ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevItems.filter((i) => i.title !== title);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
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
