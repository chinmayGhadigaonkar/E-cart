import { createSlice } from "@reduxjs/toolkit"

const initialState =[]

const Cartslice = createSlice(
    {name:'cart',
    initialState,
    reducers:{
        add(state,action){
            const isExist =state.find(item=>item.id===action.payload.id  )
           if(isExist){
            return state
           }
           else{

               state.push(action.payload)
           }

            
        },
        remove(state,action){
            return state.filter(item=>item.id!== action.payload)
        }

    }
})

export const {add,remove} =Cartslice.actions
export default Cartslice.reducer