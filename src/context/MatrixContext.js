import { createContext, useEffect, useState } from "react";

export const MatrixContext = createContext({});

export function MatrixProvider({children}){
    const [matrix, setMatrix] = useState(new Array(7).fill(new Array(6).fill(0)));
    const [player, setPlayer] = useState(1);
    const [lastMovie, setLastMovie] = useState({column:0, row:0});
    const [winner, setWinner] = useState(false);

    //depois de cada jogada, verifica vitórias
    useEffect(() => {
    
//coloca X nas bolinhas responsaveis pela vitória

    //altera a matrix para refletir nas bolinhas e elas se destacarem
    function putX(mode, i,j) {
        const newMatrix = matrix.slice();

        switch(mode) {
            case 'horizontal': 
                newMatrix[lastMovie.column][lastMovie.row] = newMatrix[lastMovie.column][lastMovie.row] + 2;
                newMatrix[lastMovie.column][lastMovie.row-1] = newMatrix[lastMovie.column][lastMovie.row-1] + 2;
                newMatrix[lastMovie.column][lastMovie.row-2] = newMatrix[lastMovie.column][lastMovie.row-2] + 2;
                newMatrix[lastMovie.column][lastMovie.row-3] = newMatrix[lastMovie.column][lastMovie.row-3] + 2;
                setMatrix(newMatrix);
            break;
            case 'vertical':
                i = parseInt(i)
                newMatrix[i][lastMovie.row] += 2;
                newMatrix[i+1][lastMovie.row] += 2;
                newMatrix[i+2][lastMovie.row] += 2;
                newMatrix[i+3][lastMovie.row] += 2;
            break;
            case 'diagonalRight':
                i = parseInt(i)
                j = parseInt(j)
                newMatrix[i][j] += 2;
                newMatrix[i+1][j+1] += 2;
                newMatrix[i+2][j+2] += 2;
                newMatrix[i+3][j+3] += 2;
            break;
            case 'diagonalLeft':
                i = parseInt(i)
                j = parseInt(j)
                newMatrix[i][j] += 2;
                newMatrix[i-1][j+1] += 2;
                newMatrix[i-2][j+2] += 2;
                newMatrix[i-3][j+3] += 2;
            break;
            default:
        }
    }

    function checkHorizontalWin(column) {
        column = parseInt(column);
        for(let i = 0; i < 3; i++) {
            if(matrix[column][i] > 0) {
                if(matrix[column][i] === matrix[column][i+1] &&
                    matrix[column][i] === matrix[column][i+2] &&
                    matrix[column][i] === matrix[column][i+3]) {
                        setWinner(true)
                        putX('horizontal');
                }
            }
        }
    }
    function checkVerticallWin(row) {
        for(let i = 0; i < 4; i++) {
            if(matrix[i][row] > 0) {
                if(matrix[i][row] === matrix[i+1][row] &&
                    matrix[i][row] === matrix[i+2][row] &&
                    matrix[i][row] === matrix[i+3][row]) {
                        setWinner(true)
                        putX('vertical',i);
                }
            }
        }
    }

    function checkRightDiagonalWin(){
        //loop pelas linhas (da 0 até a 3)
        for(let x = 0; x < 4; x++) {
            for(let y = 0; y < 4; y++) {
                if(matrix[y][x] === matrix[y+1][x+1] &&
                    matrix[y][x] === matrix[y+2][x+2] &&
                    matrix[y][x] === matrix[y+3][x+3] && matrix[y][x] > 0) {
                        setWinner(true)
                        putX('diagonalRight', y, x);
                }
            }
        }
    }

    function checkLeftDiagonalWin() {
        for(let x = 0; x < 4; x++) {
            for(let y = 3; y < 7; y++) {
                if(matrix[y][x] === matrix[y-1][x+1] &&
                    matrix[y][x] === matrix[y-2][x+2] &&
                    matrix[y][x] === matrix[y-3][x+3] && matrix[y][x] > 0) {
                        setWinner(true)
                        putX('diagonalLeft', y, x)
                }
            }
        }
    }

    if(!winner) {
        checkHorizontalWin(lastMovie.column)
        checkVerticallWin(lastMovie.row)
        checkRightDiagonalWin()
        checkLeftDiagonalWin()
    }

    },[lastMovie, matrix, setWinner, winner]);

    return (
        <MatrixContext.Provider value={
            {matrix, setMatrix, player, setPlayer, lastMovie, setLastMovie, winner, setWinner}
        }>
            {children}
        </MatrixContext.Provider>
    )
}