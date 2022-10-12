import {  createSlice } from '@reduxjs/toolkit'
import alertify from "alertifyjs"
  



const initialState = {
  
  items:[],
  page:0,
  deger:"",
  deger2:0,
  character:"",
}

export const charactersaction = createSlice({
  name: 'charactersaction',
  initialState,
  reducers: {
    additem:(state,action)=>{
      state.items=action.payload
      state.deger2+=1
      if(state.page<5){
        state.page+=1
        state.deger="load  more character"
      }else{
        console.log("naber")
        
        
        state.page+=1
        state.deger="no more character"
      }

    },
    addcharacter:(state,action)=>{
      state.character=action.payload
    },
    
   
    
  },
  
  
})

// Action creators are generated for each case reducer function
export const { additem ,addcharacter} = charactersaction.actions

export default charactersaction.reducer