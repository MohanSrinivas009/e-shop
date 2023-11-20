import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState=[]
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product={
                key:nanoid(),
                item:action.payload
            }
            state.push(product)
        },
        removeFromCart:(state,action)=>{
            
                    
        }
        
    }

})
export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;