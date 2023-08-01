import { configureStore } from '@reduxjs/toolkit'
import CounterSlice, { counterSlice } from '../slice/CounterSlice'

export  const store = configureStore({
  reducer: {
    counter:CounterSlice
  }
})