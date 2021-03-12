import { Board } from "./Board";
import './App.css';
import { MatrixProvider } from "./MatrixContext";
import { Button } from "./Button";
import { Turno } from "./Turno"

function App() {
  return (
    <MatrixProvider>
      <div className="App">
      <header>
            <h1>Divirta-se jogando Connect 4 😄</h1>
        </header>
        <Board />
        <Turno />
        <Button />
      </div>
    </MatrixProvider>
  );
}

export default App;
