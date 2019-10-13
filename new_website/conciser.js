/*This program allows a user to remove unnecessary words from a statement,
thus making their language more concise.*/ 
let userInput = ' ';

let unnecessaryWords = ['extremely', 'literally', 'actually', 'like', 'in fact', 'basically',
'essentially'];

let userWords = userInput.split(' ');

let betterWords = userWords.filter(function(word) {
  return !unnecessaryWords.includes(word)
});

let conciseStatement = betterWords.join();
console.log(conciseStatement);
