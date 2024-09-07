import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
