import React, { createContext, useState, useEffect } from "react";
import { ProductType } from "../types/ProductType";

type ContextType = {
    theme: string ;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    cartItems: ProductType[];
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, delta: number) => void;
    cartItemCount: number;
    clearCart: () => void;
}

export const Context = createContext<ContextType | undefined>(undefined);

export default function ContextProvider ({children}: React.PropsWithChildren) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") != "dark" ? "light" : "dark"
    );
  
    useEffect(()=> {
        const root = window.document.documentElement;
        
        const removeOldTheme = theme === "dark" ? "light" : "dark";

        root.classList.add(removeOldTheme);
        root.classList.remove(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    const [cartItems, setCartItems] = useState<ProductType[]>(() => {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
  
    const addToCart = (product: ProductType) => {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    };
  
    const removeFromCart = (id: number) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
  
    const updateQuantity = (id: number, quantity: number) => {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    };
  
    const clearCart = () => {
      setCartItems([]);
    };
  
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <Context.Provider value={{theme, setTheme, cartItems, addToCart, removeFromCart, updateQuantity, cartItemCount, clearCart}}>
            {children}
        </Context.Provider>
    );
}