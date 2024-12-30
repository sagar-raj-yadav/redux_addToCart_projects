import { createSlice } from '@reduxjs/toolkit';


const CartSlice=createSlice({
name:'cart',
initialState:{
    items:[],
    totalAmount:0
   },
reducers:{
    addItem(state,action){
        const newItem=action.payload;
        state.items.push(newItem);
        state.totalAmount+=newItem.price;
    },
    removeItem(state,action){
        const id=action.payload;
        const itemIndex=state.items.findIndex((item)=>item.id===id);
        if(itemIndex!=-1)
        {
            state.totalAmount-=state.items[itemIndex].price;
            state.items.splice(itemIndex,1); // item ko cart se remove karte hain
        }

    }
}    
})

export const { addItem, removeItem, clearCart } = CartSlice.actions;


export default CartSlice.reducer;