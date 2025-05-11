import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove } from '../../store/reducers/tasks'
import type Task from '../../models/Task'

type Props = Task

const Tarefa = ({ description, priority, status, title, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} placeholder="Descrição da tarefa" />
      <S.ActionBar>
        {!isEditing ? (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.SaveButton onClick={() => setIsEditing(false)}>
              Salvar
            </S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
