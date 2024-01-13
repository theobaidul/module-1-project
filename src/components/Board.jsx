import calculateWinner from '../utils/calculateWinner';
import Square from './Square';

export default function Board({ squares, onPlay, xIsNext }) {
    const winner = calculateWinner(squares);

    const clickHandler = (index) => {
        if (!squares[index] && !winner) {
            const newSquares = [...squares];
            newSquares[index] = xIsNext ? 'X' : 'O';
            onPlay(newSquares);
        }
    };

    let status;
    if (winner) {
        status = `Winner is: ${winner}`;
    } else if (squares?.every((value) => value)) {
        status = 'Gave Over';
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div>
            <h1>{status}</h1>
            <div className="grid w-full grid-cols-3 gap-1">
                <Square
                    value={squares[0]}
                    clickHandler={() => clickHandler(0)}
                />
                <Square
                    value={squares[1]}
                    clickHandler={() => clickHandler(1)}
                />
                <Square
                    value={squares[2]}
                    clickHandler={() => clickHandler(2)}
                />
                <Square
                    value={squares[3]}
                    clickHandler={() => clickHandler(3)}
                />
                <Square
                    value={squares[4]}
                    clickHandler={() => clickHandler(4)}
                />
                <Square
                    value={squares[5]}
                    clickHandler={() => clickHandler(5)}
                />
                <Square
                    value={squares[6]}
                    clickHandler={() => clickHandler(6)}
                />
                <Square
                    value={squares[7]}
                    clickHandler={() => clickHandler(7)}
                />
                <Square
                    value={squares[8]}
                    clickHandler={() => clickHandler(8)}
                />
            </div>
        </div>
    );
}
