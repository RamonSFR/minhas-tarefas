import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Task'

type FilterState = {
  term?: string
  critery: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.critery = action.payload.critery
      state.value = action.payload.value
    }
  }
})

export const { setTerm, setFilter } = filterSlice.actions
export default filterSlice.reducer
