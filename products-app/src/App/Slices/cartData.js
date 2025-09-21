import { createSlice } from '@reduxjs/toolkit'

const cartPorducts = []
const initialState = {
    products: cartPorducts,
};

const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.products.find(
                (item) => item.id == action.payload.id
            )
            if(itemExist){
                itemExist.count += 1
            }else {
                state.products.push({... action.payload, count:1})
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.products.findIndex(item => item.id == action.payload)
            if(itemIndex !== -1) {
                if(state.products[itemIndex].count > 1 ) {
                    state.products[itemIndex].count -= 1
                }else [
                    state.products.splice(itemIndex, 1)
                ]
            }
        }
    }
})

export const { addToCart , removeFromCart } = cartDataSlice.actions;
export default cartDataSlice.reducer;