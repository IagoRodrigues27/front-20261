import './App.css';
import logo from './assets/learn.svg';
function App() {   // JSX = JS = XML
  return (
    <main>
      <img src={logo}/>
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">senha</label>
      <input type="password" id="senha" name="senha" />
      <p id='senhaErro'></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;


