//import { Board } from "./components/Board";
import './App.css';
import { MatrixProvider } from "./context/MatrixContext";
import { Button } from "./components/Button";
import { Turno } from "./components/Turno"

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
