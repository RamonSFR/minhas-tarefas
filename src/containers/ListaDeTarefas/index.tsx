import { useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Title } from '../../styles/'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (i) => i.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (critery === 'priority') {
        filteredTasks = filteredTasks.filter((i) => i.priority === value)
      } else if (critery === 'status') {
        filteredTasks = filteredTasks.filter((i) => i.status === value)
      }

      return filteredTasks
    }

    return itens
  }

  const showFilterResults = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (critery === 'todas') {
      message = `${amount} tarefa(s) encontrada(s) como: "todas" ${complement}`
    } else {
      message = `${amount} tarefa(s) econtrada(s) como: "${value}" ${complement}`
    }

    return message
  }

  const tasks = taskFilter()
  const message = showFilterResults(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {taskFilter().map((t) => (
          <li key={t.title}>
            <Tarefa
              title={t.title}
              description={t.description}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
