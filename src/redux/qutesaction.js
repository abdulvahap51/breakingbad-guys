import {  createSlice } from '@reduxjs/toolkit'
import alertify from "alertifyjs"
  



const initialState = {
  
  qoutes:[],
  
}

export const qutesaction = createSlice({
  name: 'qutesaction',
  initialState,
  reducers: {
   
    addqoutes:(state,action)=>{
      state.qoutes=action.payload
    },
    
   
    
  },
  
  
})

// Action creators are generated for each case reducer function
export const {addqoutes} = qutesaction.actions

export default qutesaction.reducer