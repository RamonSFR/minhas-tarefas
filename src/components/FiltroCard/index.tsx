import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { setFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import type { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  critery: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FiltroCard = ({ subtitle, value, critery }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const taskCounter = () => {
    if (critery === 'todas') {
      return tasks.itens.length
    } else if (critery === 'priority') {
      return tasks.itens.filter((i) => i.priority === value).length
    } else if (critery === 'status') {
      return tasks.itens.filter((i) => i.status === value).length
    }
  }

  const filterTasks = () => {
    dispatch(setFilter({ critery, value }))
  }

  const isActive = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const counter = taskCounter()
  const active = isActive()

  return (
    <S.Card active={active} onClick={filterTasks}>
      <S.Contador>{counter}</S.Contador>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
