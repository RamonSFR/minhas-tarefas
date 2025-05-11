import { useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const taskFilter = () => {
    return itens.filter((i) => i.title.toLowerCase().search(term.toLowerCase()) >= 0)
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
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
