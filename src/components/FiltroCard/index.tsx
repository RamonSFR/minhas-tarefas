import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  subtitle: string
}

const FiltroCard = ({ counter, subtitle, active }: Props) => (
  <S.Card active={active}>
    <S.Contador>{counter}</S.Contador>
    <S.Label>{subtitle}</S.Label>
  </S.Card>
)

export default FiltroCard
