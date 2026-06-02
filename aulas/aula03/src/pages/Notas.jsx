import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Notas() {
    return (
        <div>
            <Sidebar />
            <main>
                <Topbar />
                <h2>Minhas notas</h2>
            </main>
        </div>
    );
}

export default Notas;