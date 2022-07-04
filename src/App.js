import './App.css';
import { useEffect, useState } from 'react';


const API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';
const WORD_LEGNTHt = 5;
//const API_URL = new URL('https://api.frontendexpert.io/api/fe/wordle-words')


function App() {

  const [solution, setSolution] = useState('');
  const [gusses, setGusses] = useState(Array(6).fill(null)); // to keep track for all word that guessed
  useEffect(() => {

    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.lenght)];
      setSolution(randomWord);
    };
    fetchWord();

  }, []);

  return (
    <div className="board">

      { // to craete a board
        gusses.map(guess => {
          return (
            <Line guess={guess ?? ''} />
          );
        })
      }

    </div>
  );
}

function Line({ guess }) {
  const tiles = [];
  for (let i = 0; i < WORD_LEGNTHt; i++) {
    const char = guess[i];
    tiles.push(<div key={i} className='tile'>{char}</div>)
  }
  return (
    <div className='line'>
      {tiles}
    </div>
  )
}
export default App;
