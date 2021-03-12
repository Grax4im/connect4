import { useContext } from "react";
import { MatrixContext } from "./MatrixContext";

export function Button () {

    const { setMatrix, setWinner} = useContext(MatrixContext);

    function newGame() {
        setMatrix(new Array(7).fill(new Array(6).fill(0)))
        setWinner(false)
    }

    return (
        <button className="newGame" onClick={newGame}>NOVO JOGO</button>
    )
}
