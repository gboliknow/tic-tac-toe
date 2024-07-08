import React from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className={`square w-20 h-20 border-2 border-gray-400 text-2xl font-bold flex items-center justify-center transition duration-200 ease-in-out
        ${value === 'X' ? 'bg-blue-200 text-blue-700' : value === 'O' ? 'bg-red-200 text-red-700' : 'bg-white hover:bg-yellow-100'}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
