import { useEffect, useState, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button, SaveButton } from '../../styles'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import type Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

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

  function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, finished: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input type="checkbox" id={title} checked={status === enums.Status.CONCLUIDA} onChange={changeTaskStatus} />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        ) : (
          <>
            <SaveButton onClick={() => saveDescription()}>Salvar</SaveButton>
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
