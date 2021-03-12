import { Column } from "./Column";

export function Board() {
    return(
        <div>
        <div className="board">
            <Column xIndex='0'></Column>
            <Column xIndex='1'></Column>
            <Column xIndex='2'></Column>
            <Column xIndex='3'></Column>
            <Column xIndex='4'></Column>
            <Column xIndex='5'></Column>
            <Column xIndex='6'></Column>
        </div>        
        </div>
    );
}