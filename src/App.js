import { Board } from "./src/components/Board";
import './App.css';
import { MatrixProvider } from "./src/context/MatrixContext";
import { Button } from "./src/components/Button";
import { Turno } from "./src/components/Turno";

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
