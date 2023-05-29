import { createSlice } from "@reduxjs/toolkit"






const Productslice=createSlice({
    name:"product",
    initialState:44,
    reducers:
    
    {
        calproductP(state,action){
         return state+action.payload
          },
        calremoveP(state,action){
          return state-action.payload
        }
        
    }
})

export const {calproductP ,calremoveP} =Productslice.actions
export default Productslice.reducer