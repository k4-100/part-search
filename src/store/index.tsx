import {configureStore, createSlice } from '@reduxjs/toolkit'
import { SearchRecord } from '../types'

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { records: Array<SearchRecord> },
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
