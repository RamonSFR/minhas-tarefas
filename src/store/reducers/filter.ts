import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Task'

type FilterState = {
  term: string
  critery: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { setTerm } = filterSlice.actions
export default filterSlice.reducer
