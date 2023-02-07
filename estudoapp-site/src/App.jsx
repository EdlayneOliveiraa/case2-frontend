import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Rotas from './routes/Rotas.jsx'

function App() {
    return (
        <div className="App">
            <Menu />
            <Rotas />
            <Rodape />
        </div>
    )
}

export default App