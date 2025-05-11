import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { SaveButton } from '../../styles'
import { remove, edit } from '../../store/reducers/tasks'
import type Task from '../../models/Task'

type Props = Task

const Tarefa = ({
  description: originalDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function resetDescription() {
    setDescription(originalDescription)
    setIsEditing(false)
  }

  function saveDescription() {
    dispatch(
      edit({
        description,
        id,
        priority,
        status,
        title
      })
    )

    setIsEditing(false)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Descrição da tarefa"
      />
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
            <SaveButton onClick={() => saveDescription()}>
              Salvar
            </SaveButton>
            <S.CancelButton onClick={() => resetDescription()}>
              Cancelar
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
