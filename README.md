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
--------------------
Handle adding the guess to our actual tile:
1. In Line component add isCurrentGuess as to check if the index i is the same index of where we currently are, which is going to be the first guess of our guesses array that is null now gusses.findindex()
2. after this check if we are on the current guess so use currentGuess Hook 
------------
Handle submit the word and see if it is correct
1. in useEffect add pressing on Enter.
2. check if the guess is currently of legnth 5. if yes handle the submit BY USING isCorrect.
3. stop playing by defininf isGameOver. set isGameover only if the guess is correct
4. handle if the user enter more than 5 chars
5. handle backspace, by defining if statment and then add the currentGuess to the dependency array 
------
Change the color of tile if it is correct, incorrect and close
1. add className='tile' to line function.
2. to check this only if we press enter, add is Final to Line function
3. to check wether the guess isFinal if it is not a currentGuess and guess in not null
4. if isFinal is true so we can add the other classes correct, incorrect and close, by defing a className.
5. if correcr so the char is equal to soluition[i]
6. if it is close check if the char is includeed in the solution
7. update the css to make the colour
8. when hitting enter save the currentGuess as newGuesses
-------



