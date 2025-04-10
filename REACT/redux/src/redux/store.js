import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counteSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})