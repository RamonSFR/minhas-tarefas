import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  prioriade?: string
  status?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return variaveis.warning
    if (props.status === 'concluída') return variaveis.success
  } else if ('prioridade' in props) {
    if (props.prioridade === 'urgente') return variaveis.danger
    if (props.prioridade === 'importante') return variaveis.warning2
  }

  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  backgroun-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
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

export const Botao = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  border: none;
  color: #fff;
  background-color: #2f3640;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.success};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.danger};
`
