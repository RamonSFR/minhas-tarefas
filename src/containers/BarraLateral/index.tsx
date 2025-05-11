import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { setTerm } from '../../store/reducers/filter'
import type { RootReducer } from '../../store'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <S.Campo type="text" placeholder="Buscar" value={term} onChange={(e) => dispatch(setTerm(e.target.value))}/>
      <S.Filtros>
        <FiltroCard subtitle="pendentes" counter={1} />
        <FiltroCard subtitle="concluídas" counter={5} />
        <FiltroCard subtitle="urgentes" counter={3} />
        <FiltroCard subtitle="importantes" counter={5} />
        <FiltroCard subtitle="normal" counter={3} />
        <FiltroCard subtitle="todas" counter={8} active />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
