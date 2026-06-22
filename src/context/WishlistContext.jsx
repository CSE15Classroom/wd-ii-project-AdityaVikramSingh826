import { createContext, useContext, useMemo, useState } from "react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "shopsphere_wishlist";

const readWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(readWishlist);

  const saveWishlist = (items) => {
    setWishlistItems(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      saveWishlist([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    saveWishlist(wishlistItems.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlistItems.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId);

  const value = useMemo(
    () => ({
      wishlistItems,
      wishlistCount: wishlistItems.length,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isWishlisted
    }),
    [wishlistItems]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export const useWishlist = () => useContext(WishlistContext);
