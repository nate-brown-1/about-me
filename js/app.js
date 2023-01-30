'use strict';

// request user name
let userName = prompt('What is your name?');

console.log('User name is: ' + userName);

// welcome message including user name
window.alert('Welcome to my site, ' + userName + ('!'));

// method to count number of correct answers
let userScore = 0;
console.log(`user has ${userScore} correct answers so far`);

// question 1
let nateChild = prompt('Does Nate have a son named Jack?').toLowerCase();
console.log('Does Nate have a son named Jack: ' + nateChild);

function jack() {
  if ( nateChild === 'yes' || nateChild === 'y' ) {
    window.alert('Correct, Jack is Nate\'s 1 year old son.');
    // increment userScore for correctly answered question
    userScore++;
  } else if ( nateChild === 'no' || nateChild === 'n' ) {
    window.alert('Wrong, Nate\'s son is named Jack.');
  } else {
    window.alert('Please try again. Acceptable answers are yes or no.');
  }
}
jack(nateChild);

console.log(`user has ${userScore} correct answers so far`);

// question 2 of 5
let nateService = prompt('Was Nate in the Air Force? (Yes/No)').toLowerCase();
console.log('Was Nate in the Air Force: ' + nateService);

function army() {
  if ( nateService === 'yes' || nateService === 'y' ) {
    window.alert('Wrong, Nate was never in the Air Force.');
  } else if ( nateService === 'no' || nateService === 'n' ) {
    window.alert('Correct, Nate was in the Army, not the Air Force.');
    // increment userScore for correctly answered question
    userScore++;
  } else {
    window.alert('Please try again. Acceptable answers are yes or no.');
  }
}
army(nateService);

console.log(`user has ${userScore} correct answers so far`);

// question 3
let nateCollege = prompt('Did Nate attend college in Washington State? (Yes/No)').toLowerCase();
console.log('Did Nate attend college in Washington: ' + nateCollege);

function college() {
  if ( nateCollege === 'yes' || nateCollege === 'y' ) {
    window.alert('Correct, Nate went to college in Bellevue, WA.');
    // increment userScore for correctly answered question
    userScore++;
  } else if ( nateCollege === 'no' || nateCollege === 'n' ) {
    window.alert('Wrong, Nate went to college in Bellevue, WA.') ;
  } else {
    window.alert('Please try again. Acceptable answers are yes or no.');
  }
}
college(nateCollege);

console.log(`user has ${userScore} correct answers so far`);

// question 4
let nateTravel = prompt('Does Nate plan to visit Australia? (Yes/No)').toLowerCase();
console.log('Does Nate plan to visit Australia: ' + nateTravel);

function travel() {
  if ( nateTravel === 'yes' || nateTravel === 'y' ) {
    window.alert('Wrong, Nate does not plan to visit Australia.');
  } else if ( nateTravel === 'no' || nateTravel === 'n' ) {
    window.alert('Correct, Nate plans to visit Europe, not Australia.');
    // increment userScore for correctly answered question
    userScore++;
  } else {
    window.alert('Please try again. Acceptable answers are yes or no.');
  }
}
travel(nateTravel);

console.log(`user has ${userScore} correct answers so far`);

// question 5
let nateRace = prompt('Does Nate plan to enter a motorcycle race? (Yes/No)').toLowerCase();
console.log('Does Nate plan to enter a motorcycle race: ' + nateRace);

function race() {
  if ( nateRace === 'yes' || nateRace === 'y' ) {
    window.alert('Wrong! Nate can\'t afford motorcycle racing, he only races triathlons.');
  } else if ( nateRace === 'no' || nateRace === 'n' ) {
    window.alert('Correct, Nate actually races triathlons.');
    // increment userScore for correctly answered question
    userScore++;
  } else {
    window.alert('Please try again. Acceptable answers are yes or no.');
  }
}
race(nateRace);

console.log(`user has ${userScore} correct answers so far`);

// random number generator for integers 1-10
// Math.random generates a random number x: x >= 0 && x < 1 (ie a number between 0 and 0.999....)
// multiplying this number by 10, then adding 1 gives a random number between 1 and 10.999...
// Math.floor rounds this number down to the nearest integer: 1 stays 1, 10.999... rounds down to 10

let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

// question 6 of 7, working function with loop
// give user 4 attempts to guess a random number between 1 and 10
// indicate if guess is too low, too high, or not a number
// exit loop immediately on correct guess
// if all 4 attempts fail, tell user the correct answer

let attemptsRemaining = 4;
let numberGuessed;

function guess() {
  while (attemptsRemaining) {
    let numberGuessed = prompt(`Guess a number between 1 and 10. You get ${attemptsRemaining} attempts!`);
    console.log(numberGuessed);
    if (numberGuessed == randomNumber) {
       window.alert(`Congratulations, you're a genius!`);
    // increment userScore for correctly answered question
    userScore++;
    attemptsRemaining = 0;
  } else if (numberGuessed < randomNumber) {
    window.alert(`That's too low! Try again!`);
    attemptsRemaining--;
  } else if (numberGuessed > randomNumber) {
    window.alert(`That's too high! Try again!`);
    attemptsRemaining--;
  } else {
    window.alert(`That's not a number, weirdo! Guess a number between 1 and 10!`);
    attemptsRemaining--;
  }
}
}
guess();

console.log(`user has ${userScore} correct answers so far`);

window.alert(`The right answer was ${randomNumber}. Thank you for playing!`);

// question 7
// loop that accepts multiple correct answers drawn from an array
// does not use methods like .includes() or .join() (they would have helped! :D)

let arrayAttemptsRemaining = 6;
const arrayAnswers = ['pine','fir','spruce','larch','cedar'];
let treeGuessed;

function tree() {
  while (arrayAttemptsRemaining) {
    let treeGuessed = prompt(`Name a type of coniferous tree. You get ${arrayAttemptsRemaining} attempts!`).toLowerCase();
    console.log(treeGuessed);
    if (treeGuessed === arrayAnswers[0] || treeGuessed === arrayAnswers[1] || treeGuessed === arrayAnswers[2] || treeGuessed === arrayAnswers[3] || treeGuessed === arrayAnswers[4]) {
      window.alert('You paid attention in Biology!');
      // increment userScore for correctly answered question
      userScore++;
      arrayAttemptsRemaining = 0;
    } else {
      window.alert(`This is the Pacific Northwest, you should know better!`);
      arrayAttemptsRemaining--;
    }
  }
}
tree();

console.log(`user has ${userScore} correct answers so far`);

window.alert(`Correct answers were ${arrayAnswers[0]}, ${arrayAnswers[1]}, ${arrayAnswers[2]}, ${arrayAnswers[3]}, and ${arrayAnswers[4]}.`);

// conclusion including user name 
window.alert(`Thank you for answering these questions, ${userName}. You answered ${userScore} out of 7 questions correctly. Feel free to browse the bio on my page.`);

// Stretch Goals 2/2
// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// NOT COMPLETE JAN 29 2250
