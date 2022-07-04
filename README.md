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
