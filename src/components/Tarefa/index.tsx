import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Tarefa = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter='priority' priority={priority}>{priority}</S.Tag>
      <S.Tag parameter='status' status={status}>{status}</S.Tag>
      <S.Description value={description} placeholder="Descrição da tarefa" />
      <S.ActionBar>
        {!isEditing ? (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelButton>Remover</S.CancelButton>
          </>
        ) : (
          <>
            <S.SaveButton onClick={() => setIsEditing(false)}>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>Cancelar</S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
