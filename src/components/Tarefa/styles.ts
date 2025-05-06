import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBgColor(props: TagProps) {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.yellow2
  } else if (props.parameter === 'status') {
    if (props.status === enums.Status.CONCLUIDA) return variables.green
    if (props.status === enums.Status.PENDENTE) return variables.yellow1
  }

  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnBgColor(props)};
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background: transparent;
  color: #8b8b8b;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  color: #fff;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export const CancelButton = styled(Button)`
  background-color: ${variables.red};
`
