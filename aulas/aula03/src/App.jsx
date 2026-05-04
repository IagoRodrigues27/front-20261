import Requerimentos from './pages/Requerimentos';
import Boletos from './pages/Boletos';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Dashboard from './pages/Dashboard';



function App() {
    const pagina = 2;

    switch (pagina) {
        case 1: return <Dashboard />
        case 2: return <Notas />
        case 3: return <Faltas />
        case 4: return <Boletos />
        case 5: return <Requerimentos />
        default: return <></>
    }
}

export default App;