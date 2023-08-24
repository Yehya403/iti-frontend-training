// TASK #3
// We're building a football betting app!
// Suppose we get data from a web service about a certain game (below). In this challenge
// we're gonna work with the data. So here are your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and
// one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new
// array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho'
// and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1',
// 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names
// (NOT an array) and prints each of them to the console, along with the number of goals
// that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call
// the function again with players from game.scored

console.log(`
<-------------- SOLUTION FOR TASK 3 --------------->

`); // 1. Create one player array for each team (variables 'players1' and 'players2')
let players1 = [];
let players2 = [];

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and
// one array ('fieldPlayers') with all the remaining 10 field players
players1.push(
  "Manuel Neuer", // GoalKeeper
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
  "Lewandowski"
);
players2.push(
  "Roman Burki", // GoalKeeper
  "Schulz",
  "Hummels",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze"
);

console.log(players1);
console.log(players2);

let gk = players1[0]; // Destructuring
let fieldPlayers = [...players1.slice(1)]; //Spread Operator

// 3 Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new
// array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho'
// and 'Perisic'
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1',
// 'draw' and 'team2')
const game = {
  odds: {
    team1: 1,
    draw: 0.5,
    team2: 2,
  },
};
let { team1, draw, team2 } = game.odds; //Destructuring

// 6. Write a function ('printGoals') that receives an arbitrary number of player names
// (NOT an array) and prints each of them to the console, along with the number of goals
// that were scored in total (number of player names passed in)
function printGoals(...playerNames) {
  console.log(playerNames);
  console.log(`Number of goals: ${playerNames.length}`);
}

// TEST DATA FOR 6
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
