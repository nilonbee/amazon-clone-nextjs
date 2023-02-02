import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //reducer functions have always action and state
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload);
      const tempIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );


      let newBasket = [...state.items];

      // check if the index exists...then remove it
      if (tempIndex >= 0) {
        newBasket.splice(tempIndex, 1);
      } else {
        console.warn("can't remove item as it doesn't exists in the basket");
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
