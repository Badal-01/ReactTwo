import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name:"item",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
    }
});
export const {addItem,removeItem} = itemSlice.actions;
export default itemSlice.reducer;