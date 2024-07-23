'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface CardParams {
  image: string;
  title: string;
  subtitle: string;
  value: number;
}

interface CartItem extends CardParams {
  quantity: number;
}

interface CartContextTypes {
  cartItems: CartItem[];
  addToCart: (item: CardParams) => void;
  removeFromCart: (title: string) => void;
  calculateTotal: () => string;
}

const CartContext = createContext<CartContextTypes | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: CardParams) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.title === item.title);
      if (itemExists) {
        return prevItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((title: string) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.title === title);
      if (itemExists && itemExists.quantity > 1) {
        return prevItems.map((i) =>
          i.title === title ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevItems.filter((i) => i.title !== title);
    });
  }, []);

  const calculateTotal = useCallback(() => {
    return cartItems
      .reduce((total, item) => total + item.value * item.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextTypes => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
