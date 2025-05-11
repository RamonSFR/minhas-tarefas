import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import Task from "../../models/Task"
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar TS',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      description: '',
    },
    {
      id: 2,
      title: 'Comprar pão',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      description: 'ir na padaria',
    },
    {
      id: 3,
      title: 'ir para academia',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description: 'treino a',
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex(t => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const taskAlreadyExists = state.itens.find(task => task.title.toLowerCase() === action.payload.title.toLowerCase())
      if (!taskAlreadyExists) {
        state.itens.push(action.payload)
      } else {
        alert('Tarefa já existe')
      }
    }
  }
})

export const { remove, edit, addTask } = tasksSlice.actions
export default tasksSlice.reducer
