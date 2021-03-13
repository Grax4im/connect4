import { useContext } from "react"
import { MatrixContext } from "../context/MatrixContext"

export function Turno() {

    const {player, winner} = useContext(MatrixContext)
    
    const ganhadorInvertido = player === 1 ? 'bolinha yellow' : 'bolinha red';
    const spanRender = <span className={ganhadorInvertido}></span>

    if(winner){
        return (
            <div className="turno">{spanRender}VENCEU</div>
        )
    }
    else{
        return (
            <div className="turno">
                <p>Aguardando jogada de:</p>
                <span className={player === 1 ? 'bolinha red' : 'bolinha yellow'}></span>
            </div>
        )
    }
}