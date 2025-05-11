import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import Task from "../../models/Task"
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar TS',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Task(
      'Comprar pão',
      enums.Priority.NORMAL,
      enums.Status.CONCLUIDA,
      'ir na padaria',
      2
    ),
    new Task(
      'ir para academia',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'treino a',
      3
    ),
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
