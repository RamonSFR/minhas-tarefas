import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Title, Campo, SaveButton } from '../../styles'
import { FormContainer, Option, Options } from './styles'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { addTask } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    const taskToAdd = new Task(
      title,
      priority,
      enums.Status.PENDENTE,
      description,
      9
    )

    dispatch(addTask(taskToAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormContainer onSubmit={registerTask}>
        <Campo
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />

        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>

        <SaveButton type="submit" onSubmit={(e) => dispatch()}>
          Cadastrar
        </SaveButton>
      </FormContainer>
    </MainContainer>
  )
}

export default Form
