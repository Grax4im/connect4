import { useContext } from "react";
import { MatrixContext } from "../context/MatrixContext";

import { Row } from "./Row";

export function Column(props) {

    const {matrix, setMatrix} = useContext(MatrixContext);

    const {player, setPlayer, setLastMovie, winner} = useContext(MatrixContext);
    
    const x = props.xIndex;

    function changePlayer() {
        setPlayer(player === 1 ? 2 : 1);
    }

    function handleClickColumn() {
            if(!winner) {
                const counter = matrix[x].indexOf(0);
                if(counter !== -1) {
                    setMatrix(matrix.map((valor, index) => index === parseInt(props.xIndex) ? valor.map((valor, index) => index === counter ? player :valor)
                    : valor))
                    changePlayer()
                    setLastMovie({column: x, row: counter});
                }
            }
    }
    
    return(
        <div className="column" onClick={handleClickColumn}>
            <Row yIndex="5" msg={matrix[props.xIndex][5]}></Row>
            <Row yIndex="4" msg={matrix[props.xIndex][4]}></Row>
            <Row yIndex="3" msg={matrix[props.xIndex][3]}></Row>
            <Row yIndex="2" msg={matrix[props.xIndex][2]}></Row>
            <Row yIndex="1" msg={matrix[props.xIndex][1]}></Row>
            <Row yIndex="0" msg={matrix[props.xIndex][0]}></Row>
        </div>
    );
}
