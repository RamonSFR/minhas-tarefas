import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Tarefa = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
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
