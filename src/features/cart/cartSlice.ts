import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, CartItem } from "../../shared/types/index";

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

// LOAD INITIAL STATE FROM LOCAL STORAGE
const loadCartFromStorage = (): CartState => {
  try {
    const savedCart = localStorage.getItem("okie_cart");
    return savedCart ? JSON.parse(savedCart) : { items: [], totalQuantity: 0, totalAmount: 0 };
  } catch (e) {
    return { items: [], totalQuantity: 0, totalAmount: 0 };
  }
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD ITEM TO CART
    addItem(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }

      state.totalQuantity++;
      state.totalAmount += newItem.price;

      // SYNC WITH LOCAL STORAGE
      localStorage.setItem("okie_cart", JSON.stringify(state));
    },

    // REMOVE ITEM COMPLETELY
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }

      localStorage.setItem("okie_cart", JSON.stringify(state));
    },

    // REMOVE SINGLE QUANTITY
    removeSingleItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }

      localStorage.setItem("okie_cart", JSON.stringify(state));
    },

    // SET SPECIFIC QUANTITY
    setQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity >= 1) {
        const quantityDiff = quantity - existingItem.quantity;
        state.totalQuantity += quantityDiff;
        state.totalAmount += quantityDiff * existingItem.price;
        existingItem.quantity = quantity;
      } else if (existingItem && quantity <= 0) {
        // IF QUANTITY IS 0 OR LESS, REMOVE ITEM
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }

      localStorage.setItem("okie_cart", JSON.stringify(state));
    },

    // CLEAR EVERYTHING
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      localStorage.removeItem("okie_cart");
    },
  },
});

export const { addItem, removeItem, removeSingleItem, setQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
