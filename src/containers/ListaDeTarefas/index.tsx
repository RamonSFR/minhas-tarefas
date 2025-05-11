import { useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

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

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{critery}</li>
        <li>{value}</li>
      </ul>
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
    </Container>
  )
}

export default ListaDeTarefas
