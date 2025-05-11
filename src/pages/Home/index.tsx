import AddButton from '../../components/AddButton'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral showFilters/>
    <ListaDeTarefas />
    <AddButton />
  </>
)

export default Home
