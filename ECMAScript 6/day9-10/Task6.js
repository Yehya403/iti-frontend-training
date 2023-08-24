// TASK #6
// Julia and Kate are studying dogs, and they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than
// the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is
// within a range 10% above and 10% below the recommended portion
// (see hint).
// 1. Loop over the array containing dog objects, and for each dog,
// calculate the recommended food portion and add it to the object as
// a new property. Do NOT create a new array, simply loop over the
// array. Forumla: recommendedFood = weight ** 0.75 * 28. (The
// result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too
// much or too little. HINT: Some dogs have multiple owners, so you
// first need to find Sarah in the owners array, and so this one is a bit
// tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat
// too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this:
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John
// and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the
// amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of
// food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of
// food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended
// food portion in an ascending order (keep in mind that the portions are
// inside the array's objects)
// HINT 2: Being within a range 10% above and below the recommended
// portion means: current > (recommended * 0.90) && current <
// (recommended * 1.10). Basically, the current portion should be between
// 90% and 110% of the recommended portion.

console.log(`
<-------------- SOLUTION FOR TASK 6 --------------->

`);
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the array containing dog objects, and for each dog,
// calculate the recommended food portion and add it to the object as
// a new property.
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28; // In grams
});

// 2. Find Sarah's dog and log to the console whether it's eating too
// much or too little.
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (sarahsDog) {
  const portionDiff = sarahsDog.curFood - sarahsDog.recommendedFood;
  if (portionDiff > 0) {
    console.log("Sarah's dog is eating too much.");
  } else if (portionDiff < 0) {
    console.log("Sarah's dog is eating too little.");
  } else {
    console.log("Sarah's dog is eating an okay amount.");
  }
}

// 3. Create arrays of owners for dogs eating too much or too little
let ownersTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

let ownersTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

// 4. Log a string to the console for each array created in 3.
console.log(`${ownersTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersTooLittle.join(" and ")}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the
// amount of food that is recommended (just true or false)
const anyDogEatingRecommended = dogs.some(
  (dog) => dog.curFood === dog.recommendedFood
);
console.log(
  `Any dog eating exactly the recommended amount? ${anyDogEatingRecommended}`
);

// 6. Check if any dog is eating an OKAY amount of food
// some() method provides a concise way to check
// ,if the specified condition is met by at least one element in the array
const anyDogEatingOkay = dogs.some((dog) => {
  const lowerLimit = dog.recommendedFood * 0.9;
  const upperLimit = dog.recommendedFood * 1.1;
  return dog.curFood >= lowerLimit && dog.curFood <= upperLimit;
});
console.log(`Any dog eating an okay amount of food? ${anyDogEatingOkay}`);

// 7. Create an array containing the dogs that are eating an OKAY amount of
// food (try to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter((dog) => {
  const lowerLimit = dog.recommendedFood * 0.9;
  const upperLimit = dog.recommendedFood * 1.1;
  return dog.curFood >= lowerLimit && dog.curFood <= upperLimit;
});

// 8. Create a shallow copy of the dogs array and sort it by recommended
// food portion in an ascending order (keep in mind that the portions are
// inside the array's objects)
const dogsSortedByRecommendedPortion = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSortedByRecommendedPortion);
