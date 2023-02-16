import {configureStore, createSlice } from '@reduxjs/toolkit'
import { SearchRecord } from '../types'
import placeholderImg from '../assets/images/placeholders/graphics-card-placeholder.webp'

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { 
    records:  [ 
      new SearchRecord('dsadas', 'ds', 5.0, placeholderImg),
      new SearchRecord('dsadas', 'ds', 5.0, placeholderImg),
       new SearchRecord('dsadas', 'ds', 5.0, placeholderImg, { isDrawerRecord: true }),
    ]
    
  },
  reducers: {
    addToDrawer(){},
    removeToDrawer(){},
  }
})


export const actions = searchResultsSlice.actions
const store = configureStore({
  reducer: searchResultsSlice.reducer
})

export default store
