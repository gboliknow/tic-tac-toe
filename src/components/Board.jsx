import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const winner = calculateWinner(squares);
  const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="status text-2xl mb-4 p-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold rounded-lg flex items-center justify-center relative">
        {status}
     
      </div>
      <div className="board-row flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
