import Tarefa from '../../components/Tarefa'

import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    titulo: 'Estudar Typescript',
    description: 'Ver a aula 3 do curso',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir na padaria',
    description: 'comprar pão',
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ir para academia',
    description: 'treino de perna',
    priority: enums.Priority.NORMAL,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            title={t.titulo}
            description={t.description}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
