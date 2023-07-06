import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalPrice: 0,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
            state.products = [...state.products, action.payload]},
        cleanBasket: (state) => (state.products = []),
        //countAllPrices:
        //removeOneProduct:
        //deleteItem
        //countTotalPrice
    },
})

export const { addProductToBasket, cleanBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer; 