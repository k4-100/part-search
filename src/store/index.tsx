import {configureStore, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { SearchRecord } from '../types'
import placeholderImg from '../assets/images/placeholders/graphics-card-placeholder.webp'

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { 
    records:  [ 
      new SearchRecord(1,'dsadas', 'ds', 5.0, placeholderImg),
      new SearchRecord(2,'dsadas', 'ds', 5.0, placeholderImg),
       new SearchRecord(3,'dsadas', 'ds', 5.0, placeholderImg, { isDrawerRecord: true }),
    ]
    
  },
  reducers: {
    toggleIsDrawerRecord(state, action){
      const { records } = state
      const index = records
        .findIndex( record => record.id === action.payload )

      if( index === -1){
        console.error("INDEX IS -1")
        return
      }

      const newRecords = _.cloneDeep( records )
      newRecords[index].options.isDrawerRecord = !newRecords[index].options.isDrawerRecord
      state.records = newRecords
    },
  }
})


export const actions = searchResultsSlice.actions
const store = configureStore({
  reducer: searchResultsSlice.reducer
})

export default store
