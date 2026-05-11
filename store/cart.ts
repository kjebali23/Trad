"use client";

import { create } from "zustand";

export interface CartItem {
  uid: string;
  id: number;
  name: string;
  price: number;
  badge: string;
  langPair: string;
  pages: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "uid">) => void;
  removeItem: (uid: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [
        ...state.items,
        { ...item, uid: `${item.id}-${Date.now()}-${Math.random()}` },
      ],
    })),

  removeItem: (uid) =>
    set((state) => ({
      items: state.items.filter((i) => i.uid !== uid),
    })),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.length,

  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price, 0),
}));
