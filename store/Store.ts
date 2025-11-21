/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { create } from "zustand"

import { persist } from "zustand/middleware"

type CartState = {
  items: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};


export const useStore = create<CartState>() (
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);

        if(existingItem) {
          set({
            items: get().items.map((i) => 
            i.id === item.id ? { ...i, quantity: i.quantity + 1} : i
            ),
          });
        } else {
          set({
            items: [...get().items, { ...item, quantity: 1}],
          })
        }

      },


      removeFromCart: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      increaseQty: (id) => {
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      },

      decreaseQty: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (!item) return;

        if (item.quantity === 1) {
          // remove item if quantity would drop to zero
          set({
            items: get().items.filter((i) => i.id !== id),
          });
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        }
      },
    }),

    {
      name: "cart-storage"
    }
  )
)