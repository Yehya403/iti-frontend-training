// Let's continue with our football betting app! This time, we have a map with a log of the
// events that happened during the game. The values are the events themselves, and the
// keys are the minutes in which each event happened (a football game has 90 minutes
// plus some extra time).
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was
// unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9
// minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first
// half or second half (after 45 min) of the game, like this:
//  [FIRST HALF] 17: ⚽️ GOAL
console.log(`
<-------------- SOLUTION FOR TASK 4 --------------->

`);
const gameEvents = new Map([
  [17, "⚽️ G O A L "],
  [36, "🔁 S u b s t i t u t i o n "],
  [47, "⚽️ G O A L "],
  [61, "🔁 S u b s t i t u t i o n "],
  [64, "🔶 Y e l l o w c a r d "],
  [69, "🔴 R e d c a r d "],
  [70, "🔁 S u b s t i t u t i o n "],
  [72, "🔁 S u b s t i t u t i o n "],
  [76, "⚽️ G O A L "],
  [80, "⚽️ G O A L "],
  [92, "🔶 Y e l l o w c a r d "],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
let events = [...new Set(gameEvents.values())];
console.log(`gameEvents with their unique values : ${events}`);

// 2. After the game has finished, is was found that the yellow card from minute 64 was
// unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents); // After deletion

// 3. Print the following string to the console: "An event happened, on average, every 9
// minutes" (keep in mind that a game has 90 minutes)
const gameDuration = 90;
const numberOfEvents = gameEvents.size;
console.log(numberOfEvents);
const avgTimeBetweenEvents = numberOfEvents / gameDuration;
console.log(
  `An event happened, on average, every ${avgTimeBetweenEvents} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first
// half or second half (after 45 min) of the game, like this:
//  [FIRST HALF] 17: ⚽️ GOAL
gameEvents.forEach((event, minute) => {
  let half;
  if (minute <= 45) {
    half = "[First HALF]";
  } else {
    half = "[SECOND HALF]";
  }
  console.log(`${half} ${minute}: ${event}`);
});
