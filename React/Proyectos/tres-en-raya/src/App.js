import './App.css';
import { Square } from './components/Square';
import { useState } from 'react';

let player = true;

function App() {
  const [squares, setSquares] = useState([
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' }
  ]);

  const updateSquares = id => {
    const suerte = squares.map(square => {
      if (square.id === id) {
        square.value = player ? 'X' : 'O';
        player = !player;
      }
      return square;
    })
    setSquares(suerte);
  };

  return (
    <div className='App'>
      <div className='board'>
        {squares.map((square, i) => 
          <Square key={i} value={square.value} onClick={() => updateSquares(square.id)}/>
        )}
      </div>
    </div>
  );
}

export default App;
