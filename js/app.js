'use strict';

// request user name
let userName = prompt('What is your name?');

console.log('User name is: ' + userName);

// welcome message including user name
window.alert('Welcome to my site, ' + userName + ('!'));

// As a user, I would like to know my final score so that I can know how well I did. DONE
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked. DONE

// method to count number of correct answers
// there is probably a better way to do this

let userScore = 0;
console.log(`user has ${userScore} correct answers so far`);

// question 1 of 5
let nateChild = prompt('Does Nate have a son named Jack?').toLowerCase();
console.log('Does Nate have a son named Jack: ' + nateChild);

if ( nateChild === 'yes' || nateChild === 'y' ) {
  // console.log('Correct, Jack is Nate\'s 1 year old son.');
  window.alert('Correct, Jack is Nate\'s 1 year old son.');
  // increment userScore for correctly answered question
  userScore++;
} else if ( nateChild === 'no' || nateChild === 'n' ) {
  // console.log('Wrong, Nate\'s son is named Jack.');
  window.alert('Wrong, Nate\'s son is named Jack.');
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}
console.log(`user has ${userScore} correct answers so far`);

// question 2 of 5
let nateService = prompt('Was Nate in the Air Force? (Yes/No)').toLowerCase();
console.log('Was Nate in the Air Force: ' + nateService);

if ( nateService === 'yes' || nateService === 'y' ) {
  // console.log('Wrong, Nate was never in the Air Force.');
  window.alert('Wrong, Nate was never in the Air Force.');
} else if ( nateService === 'no' || nateService === 'n' ) {
  // console.log('Correct, Nate was in the Army, not the Air Force.');
  window.alert('Correct, Nate was in the Army, not the Air Force.');
  // increment userScore for correctly answered question
  userScore++;
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}
console.log(`user has ${userScore} correct answers so far`);

// question 3 of 5
let nateCollege = prompt('Did Nate attend college in Washington State? (Yes/No)').toLowerCase();
console.log('Did Nate attend college in Washington: ' + nateCollege);

if ( nateCollege === 'yes' || nateCollege === 'y' ) {
  // console.log('Correct, Nate went to college in Bellevue, WA.');
  window.alert('Correct, Nate went to college in Bellevue, WA.');
  // increment userScore for correctly answered question
  userScore++;
} else if ( nateCollege === 'no' || nateCollege === 'n' ) {
  // console.log('Wrong, Nate went to college in Bellevue, WA.') ;
  window.alert('Wrong, Nate went to college in Bellevue, WA.') ;
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}
console.log(`user has ${userScore} correct answers so far`);

// question 4 of 5
let nateTravel = prompt('Does Nate plan to visit Australia? (Yes/No)').toLowerCase();
console.log('Does Nate plan to visit Australia: ' + nateTravel);

if ( nateTravel === 'yes' || nateTravel === 'y' ) {
  // console.log('Wrong, Nate does not plan to visit Australia.');
  window.alert('Wrong, Nate does not plan to visit Australia.');
} else if ( nateTravel === 'no' || nateTravel === 'n' ) {
  // console.log('Correct, Nate plans to visit Europe, not Australia.');
  window.alert('Correct, Nate plans to visit Europe, not Australia.');
  // increment userScore for correctly answered question
  userScore++;
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}
console.log(`user has ${userScore} correct answers so far`);

// question 5 of 5
let nateRace = prompt('Does Nate plan to enter a motorcycle race? (Yes/No)').toLowerCase();
console.log('Does Nate plan to enter a motorcycle race: ' + nateRace);

if ( nateRace === 'yes' || nateRace === 'y' ) {
  // console.log('Wrong! Nate can\'t afford motorcycle racing, he only races triathlons.');
  window.alert('Wrong! Nate can\'t afford motorcycle racing, he only races triathlons.');
} else if ( nateRace === 'no' || nateRace === 'n' ) {
  // console.log('Correct, Nate actually races triathlons.');
  window.alert('Correct, Nate actually races triathlons.');
  // increment userScore for correctly answered question
  userScore++;
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}
console.log(`user has ${userScore} correct answers so far`);

// Stretch Goals (1/2)
// Make the number-guessing question use a random number as its correct answer. DONE

// random number generator for integers 1-10
// Math.random generates a random number x: x >= 0 && x < 1 (ie a number between 0 and 0.999....)
// Multiplying this number by 10, then adding 1 gives a random number  between 1 and 10.999...
// Math.floor rounds this number down to the nearest integer: 1 rounds down to 1, 10.999... rounds down to 10

let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number. DONE
// Indicates through an alert if the guess is “too high” or “too low”. DONE
// It should give the user exactly four opportunities to get the correct answer. DONE
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort. DONE

// give user 4 attempts to guess a number between 1 and 10
// indicate if guess is too low, too high, or not a number
// exit loop immediately on correct guess

let attemptsRemaining = 4;

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
console.log(`user has ${userScore} correct answers so far`);

window.alert(`The right answer was ${randomNumber}. Thank you for playing!`);

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game. DONE
// Add a 7th question that has multiple possible correct answers that are stored in an array. DONE
// Give the user 6 attempts to guess the correct answer. DONE
// The guesses will end once the user guesses a correct answer or they run out of attempts. DONE
// Display all the possible correct answers to the user. DONE
// Consider using a loop of some sort for this question. DONE

let arrayAttemptsRemaining = 6;
const arrayAnswers = ['pine','fir','spruce','larch','cedar'];

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
console.log(`user has ${userScore} correct answers so far`);

window.alert(`Correct answers were ${arrayAnswers[0]}, ${arrayAnswers[1]}, ${arrayAnswers[2]}, ${arrayAnswers[3]}, and ${arrayAnswers[4]}.`);

// conclusion including user name 

window.alert(`Thank you for answering these questions, ${userName}. You answered ${userScore} out of 7 questions correctly. Feel free to browse the bio on my page.`);

// Stretch Goals 2/2
// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// NOT HAPPENING TONIGHT LOL
