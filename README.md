Fetch a wordle list then define a board:
1. fetch the list of wordle words from   'https://api.frontendexpert.io/api/fe/wordle-words';
2. select a random word and put it in randomword const;
setSolution from useState solution to this random word.
3. execute fetchWord function inside useEffect Hook;
4. using useState set an array guesses to be 6 fields and null
5. in return define a board div then map the guesses array to Line fuction as there:
 * define empty tiles array
 * define for loop to pick chars from the guess array that pased by Line fuction.
 * then push it to a div named tile with a key i
 * finally return the tiles array
-------------------------------
Handle making a guess:
1. create another useEffect Hook and a function handleType which takes an input 'event', which is a key board event.
2. add an event listener 'keydown' , means on key down we call handleType function. then on unmount we remove the event listener 
3. in handleType we figure out what the key is, that was typed and add it to the currentGuess, which is created by useState Hook
4. we can replace currentGuess by oldGuess to improve the performance by get red of currentGuess from the dependency array in useEffect Hook.
