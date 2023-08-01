import {createSlice} from "@reduxjs/toolkit";
 const initialState={
value:0
};
const CounterSlice=createSlice({
  name:"counter",
  initialState,reducers:{
    add:(state)=>{
      console.log(state.value+=1)
    },
    sub:(state)=>{
      if(state.value>=1){
        state.value-=1;
      }
    }
  }
});
export const {add,sub}= CounterSlice.actions;
export default CounterSlice.reducer;
