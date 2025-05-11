import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { setTerm } from '../../store/reducers/filter'
import type { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Task'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Buscar"
        value={term}
        onChange={(e) => dispatch(setTerm(e.target.value))}
      />
      <S.Filtros>
        <FiltroCard
          value={enums.Status.PENDENTE}
          critery="status"
          subtitle="pendentes"
        />
        <FiltroCard
          value={enums.Status.CONCLUIDA}
          critery="status"
          subtitle="concluídas"
        />
        <FiltroCard
          critery="priority"
          value={enums.Priority.URGENTE}
          subtitle="urgente"
        />
        <FiltroCard
          critery="priority"
          value={enums.Priority.IMPORTANTE}
          subtitle="importante"
        />
        <FiltroCard
          critery="priority"
          value={enums.Priority.NORMAL}
          subtitle="normal"
        />
        <FiltroCard critery="todas" subtitle="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
