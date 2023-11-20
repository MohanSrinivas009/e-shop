import { createSlice } from "@reduxjs/toolkit";

export const initialState=[]

export const userLoginSlice=createSlice({
    name:'Login',
    initialState,
    reducers:{
        signin:(state,action)=>{
            state.push(action.payload)
        },
        signout:(state)=>{
            state=null
        }
    }
})

export const {signin,register}=userLoginSlice.actions
export default userLoginSlice.reducer