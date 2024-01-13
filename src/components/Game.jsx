import { useState } from 'react';
import Board from './Board';
import History from './History';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const onPlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (move) => {
        setCurrentMove(move);
    };

    return (
        <div className="m-3 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
            <Board squares={currentSquares} onPlay={onPlay} xIsNext={xIsNext} />
            <History history={history} jumpTo={jumpTo} />
        </div>
    );
}
