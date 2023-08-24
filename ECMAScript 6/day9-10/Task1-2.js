console.log(`
<-------------- SOLUTION FOR TASK 1-2 --------------->

`);

let markIsMass,
  markIsHeight,
  johnIsMass,
  johnIsHeight = 0;

function getBmi(mass, height) {
  const bmi = mass / height ** 2;
  return bmi;
}

let markHigherBMI;

//TEST DATA 1
markIsMass = 78; // kg
markIsHeight = 1.69; // meters
johnIsMass = 92; // kg
johnIsHeight = 1.95; // meters

let markIsBmi = getBmi(markIsMass, markIsHeight);
let johnIsBmi = getBmi(johnIsMass, johnIsHeight);
markHigherBMI = markIsBmi > johnIsBmi;

console.log(`Mark 's Bmi is ${markIsBmi}
"John 's Bmi is ${johnIsBmi}
is Mark has higher bmi than John's ? ${markHigherBMI}`);

if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's!
Mark's BMI ${markIsBmi} is higher than John's ${johnIsBmi}!`);
} else {
  console.log(`John's BMI is higher than Mark's!
John's BMI ${johnIsBmi} is higher than Mark's ${markIsBmi}!`);
}

//TEST DATA 2

markIsMass = 95; // kg
markIsHeight = 1.88; // meters
johnIsMass = 85; // kg
johnIsHeight = 1.76; // meters

markIsBmi = getBmi(markIsMass, markIsHeight);
johnIsBmi = getBmi(johnIsMass, johnIsHeight);

markHigherBMI = markIsBmi > johnIsBmi;

console.log(`Mark 's Bmi is ${markIsBmi}
"John 's Bmi is ${johnIsBmi}
is Mark has higher bmi than John's ? ${markHigherBMI}`);

if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's!
Mark's BMI ${markIsBmi} is higher than John's ${johnIsBmi}!`);
} else {
  console.log(`John's BMI is higher than Mark's!
John's BMI ${johnIsBmi} is higher than Mark's ${markIsBmi}!`);
}
