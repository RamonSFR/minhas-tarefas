import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.danger
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.warning2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.warning
    if (props.status === enums.Status.CONCLUIDA) return variaveis.success
  }

  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  backgroun-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
`

export const descricao = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  margin: 16px 0;
  display: block;
  resize: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: #8b8b8b;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.success};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.danger};
`
