'use strict';

// request user name
let userName = prompt('What is your name?');

console.log('User name is: ' + userName);

// welcome message including user name
window.alert('Welcome to my site, ' + userName + ('!'));

// question 1 of 5
let nateChild = prompt('Does Nate have a son named Jack?').toLowerCase();
console.log('Does Nate have a son named Jack: ' + nateChild);

if ( nateChild === 'yes' || nateChild === 'y' ) {
  // console.log('Correct, Jack is Nate\'s 1 year old son.');
  window.alert('Correct, Jack is Nate\'s 1 year old son.');
} else if ( nateChild === 'no' || nateChild === 'n' ) {
  // console.log('Wrong, Nate\'s son is named Jack.');
  window.alert('Wrong, Nate\'s son is named Jack.');
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}

// question 2 of 5
let nateService = prompt('Was Nate in the Air Force? (Yes/No)').toLowerCase();
console.log('Was Nate in the Air Force: ' + nateService);

if ( nateService === 'yes' || nateService === 'y' ) {
  // console.log('Wrong, Nate was never in the Air Force.');
  window.alert('Wrong, Nate was never in the Air Force.');
} else if ( nateService === 'no' || nateService === 'n' ) {
  // console.log('Correct, Nate was in the Army, not the Air Force.');
  window.alert('Correct, Nate was in the Army, not the Air Force.');
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}

// question 3 of 5
let nateCollege = prompt('Did Nate attend college in Washington State? (Yes/No)').toLowerCase();
console.log('Did Nate attend college in Washington: ' + nateCollege);

if ( nateCollege === 'yes' || nateCollege === 'y' ) {
  // console.log('Correct, Nate went to college in Bellevue, WA.');
  window.alert('Correct, Nate went to college in Bellevue, WA.');
} else if ( nateCollege === 'no' || nateCollege === 'n' ) {
  // console.log('Wrong, Nate went to college in Bellevue, WA.') ;
  window.alert('Wrong, Nate went to college in Bellevue, WA.') ;
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}

// question 4 of 5
let nateTravel = prompt('Does Nate plan to visit Australia? (Yes/No)').toLowerCase();
console.log('Does Nate plan to visit Australia: ' + nateTravel);

if ( nateTravel === 'yes' || nateTravel === 'y' ) {
  // console.log('Wrong, Nate does not plan to visit Australia.');
  window.alert('Wrong, Nate does not plan to visit Australia.');
} else if ( nateTravel === 'no' || nateTravel === 'n' ) {
  // console.log('Correct, Nate plans to visit Europe, not Australia.');
  window.alert('Correct, Nate plans to visit Europe, not Australia.');
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}

// question 5 of 5
let nateRace = prompt('Does Nate plan to enter a motorcycle race? (Yes/No)').toLowerCase();
console.log('Does Nate plan to enter a motorcycle race: ' + nateRace);

if ( nateRace === 'yes' || nateRace === 'y' ) {
  // console.log('Wrong! Nate can\'t afford motorcycle racing, he only races triathlons.');
  window.alert('Wrong! Nate can\'t afford motorcycle racing, he only races triathlons.');
} else if ( nateRace === 'no' || nateRace === 'n' ) {
  // console.log('Correct, Nate actually races triathlons.');
  window.alert('Correct, Nate actually races triathlons.');
} else {
  // console.log('Please try again. Acceptable answers are yes or no.');
  window.alert('Please try again. Acceptable answers are yes or no.');
}

// random number generator for integers 1-10

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

window.alert(`The right answer was ${randomNumber}. Thank you for playing!`);

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array. DONE

let arrayAttemptsRemaining = 6;
const arrayAnswers = ['pine','fir','spruce','larch','cedar'];

while (arrayAttemptsRemaining) {
  let treeGuessed = prompt(`Name a type of coniferous tree. You get ${arrayAttemptsRemaining} attempts!`).toLowerCase();
  console.log(treeGuessed);
  if (treeGuessed === arrayAnswers[0] || treeGuessed === arrayAnswers[1] || treeGuessed === arrayAnswers[2] || treeGuessed === arrayAnswers[3] || treeGuessed === arrayAnswers[4]) {
    window.alert('You paid attention in Biology!');
    arrayAttemptsRemaining = 0;
  } else {
    window.alert(`This is the Pacific Northwest, you should know better!`);
    arrayAttemptsRemaining--;
  }
}

window.alert(`Correct answers were ${arrayAnswers[0]}, ${arrayAnswers[1]}, ${arrayAnswers[2]}, ${arrayAnswers[3]}, and ${arrayAnswers[4]}.`);

// Give the user 6 attempts to guess the correct answer. DONE
// The guesses will end once the user guesses a correct answer or they run out of attempts. DONE
// Display all the possible correct answers to the user. DONE
// Consider using a loop of some sort for this question. DONE

// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

// Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
// Add a screenshot of your score to your README.md file.
// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stretch Goals

// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.

// conclusion including user name 

window.alert(`Thank you for answering these questions, ${userName}. Feel free to browse the bio on my page.`);
