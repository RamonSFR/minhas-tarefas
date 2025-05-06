import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const tasks = [
  {
    titulo: 'Estudar Typescript',
    description: 'Ver a aula 3 do curso',
    priority: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Ir na padaria',
    description: 'comprar pão',
    priority: 'normal',
    status: 'pendente'
  },
  {
    titulo: 'Ir para academia',
    description: 'treino de perna',
    priority: 'importante',
    status: 'concluído'
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
