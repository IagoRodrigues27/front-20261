import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Notas() {
    return (
        <div>
            <Sidebar />
            <main>
                <Topbar />
                <h2>Minhas notas</h2>
                <section class="notas-card">

                    <h2>2026.1</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Disciplina</th>
                                <th>A1</th>
                                <th>A2</th>
                                <th>A3</th>
                                <th>Menção</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>BI e Data Warehousing</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>SR</td>
                            </tr>

                            <tr>
                                <td>Construção de Frontend</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>SR</td>
                            </tr>

                            <tr>
                                <td>Manutenção de Software e Devops</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>SR</td>
                            </tr>
                        </tbody>
                    </table>

                </section>

            </main>
        </div>
    );
}

export default Notas;