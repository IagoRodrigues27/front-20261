import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Faltas() {
    return (
        <div>
            <Sidebar />
            <main>
                <Topbar />
                <h1>Minhas Faltas</h1>
                <p>Histórico de Faltas por Semestre</p>
                <section class="faltas-card">
                    <h2>2026.1</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Disciplina</th>
                                <th>Total de Faltas</th>
                                <th>% de Presença</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BI e Data Warehousing</td>
                                <td>0</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Construção de Frontend</td>
                                <td>0</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Manutenção de Software e Devops</td>
                                <td>0</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>

    );
}

export default Faltas;