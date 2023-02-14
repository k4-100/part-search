import {configureStore, createSlice } from '@reduxjs/toolkit'

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { records: [] },
  reducers: {
    addToDrawer(){},
    removeToDrawer(){}
  }
})


export const actions = searchResultsSlice.actions
const store = configureStore({
  reducer: searchResultsSlice.reducer
})

export default store
