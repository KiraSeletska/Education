import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applesCount: 10,
    bananasCount: 2,
};

const monkeySlice = createSlice({
    name: "monkey",
    initialState,
    reducers: {
        sayHi: () => {
            alert("Hi!");
        },
        getGift: (state, action) => {
            const { giftType } = action.payload;
            state[`${giftType}Count`]++;
        }
    },
});

export const { sayHi, getGift } = monkeySlice.actions;
export const monkeyReducer = monkeySlice.reducer;