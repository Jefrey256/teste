import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Rotas } from './components/router'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Rotas/>
  </Router>,
)
