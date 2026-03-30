import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'


function App() {
  return <div className='flex flex-col md:flex-row'>
    <aside className='hidden md: block'></aside>
    <main className=''></main>
      <aside>
      <header>
        <img src={logo} alt="" />
        <h1>Aluno Online</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </header>
    </aside>
    <main>
      <header>
        <h1>Ola,Aluno</h1>
        <img src={avatar} alt="imagem do avatar" />
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <article>
            <h3>Mural de avisos</h3>
            <ul>
              <li>Inscricao para p projeto de extensao</li>
              <li>Eleição para representeante da turma</li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Calendário academico</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Minhas dependencias</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
        </section>
      </header>
    </main>
  </div>
}

export default App;