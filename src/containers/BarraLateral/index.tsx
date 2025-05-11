import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Button, Campo } from '../../styles'
import { setTerm } from '../../store/reducers/filter'
import type { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Task'

type Props = {
  showFilters: boolean
}

const BarraLateral = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      {showFilters ? (
        <>
          <Campo
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
        </>
      ) : (
        <Button type="button" onClick={() => navigate('/')}>
          Voltar a lista de tarefas
        </Button>
      )}
    </S.Aside>
  )
}

export default BarraLateral
