import './App.css';
import { useEffect, useState } from 'react';


const API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';
const WORD_LEGNTHt = 5;
//const API_URL = new URL('https://api.frontendexpert.io/api/fe/wordle-words')


function App() {

  const [solution, setSolution] = useState('hello');
  const [gusses, setGusses] = useState(Array(6).fill(null)); // to keep track for all word that guessed
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);


  useEffect(() => {

    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.lenght)];
      // setSolution(randomWord);
    };
    fetchWord();

  }, []);

  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }
      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return;
        }
        const newGuesses = [...gusses];
        newGuesses[gusses.findIndex(val => val == null)] = currentGuess;
        setGusses(newGuesses);
        setCurrentGuess('');
        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }

      }
      if (currentGuess.length >= 5) {
        return;
      }
      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      setCurrentGuess(oldGuess => oldGuess + event.key); // event.key is whatever the user typed using the keyboard 


    };
    window.addEventListener('keydown', handleType);
    return () => window.removeEventListener('keydown', handleType);

  }, [currentGuess, isGameOver, solution])

  return (
    <div className="board">

      { // to craete a board
        gusses.map((guess, i) => {
          const isCurrentGuess = i === gusses.findIndex(val => val == null)
          return (
            <Line guess={isCurrentGuess ? currentGuess : guess ?? ''}
              isFinal={!isCurrentGuess && guess != null}
              solution={solution}
            />
          );
        })
      }
    </div>
  );
}

function Line({ guess, isFinal, solution }) {
  const tiles = [];
  for (let i = 0; i < WORD_LEGNTHt; i++) {
    const char = guess[i];
    let className = 'tile';

    if (isFinal) {
      if (char === solution[i]) {
        className += ' correct';
      }
      else if (solution.includes(char)) {
        className += ' close';
      }
      else {
        className += ' incorrect';
      }
    }

    tiles.push(<div key={i} className={className}>{char}</div>)
  }
  return (
    <div className='line'>
      {tiles}
    </div>
  )
}
export default App;
