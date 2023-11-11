import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      // {
      //   PIZZAiD: 32,
      //   name: "margherita",
      //   quantity: 2,
      //   unitPrice: 16,
      //   totalPrice: 32,
      // },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      //payLoad = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payLoad = pizzaId
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaItemQuantity: (state, action) => {
      const item = item.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreasItemQuantity: (state, action) => {
      const item = item.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
