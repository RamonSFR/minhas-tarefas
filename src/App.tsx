import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova Tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
