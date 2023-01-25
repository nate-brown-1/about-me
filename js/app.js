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

// conclusion including user name 
window.alert('Thank you for answering, ' + userName + '. Feel free to browse the bio on my page.');
