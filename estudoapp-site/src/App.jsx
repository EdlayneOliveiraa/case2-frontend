import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Route from './routes/Route.jsx'

function App() {
    return (
        <div className="App">
            <Menu />
            <Route />
            <Rodape />
        </div>
    )
}

export default App