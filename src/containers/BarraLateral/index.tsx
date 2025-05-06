import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <FiltroCard subtitle='pendentes' counter={1}/>
      <FiltroCard subtitle='concluídas' counter={5}/>
      <FiltroCard subtitle='urgentes' counter={3}/>
      <FiltroCard subtitle='importantes' counter={5}/>
      <FiltroCard subtitle='normal' counter={3}/>
      <FiltroCard subtitle='todas' counter={8} active/>
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
