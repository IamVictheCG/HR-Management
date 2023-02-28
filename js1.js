let num = 5; // initialize the number
let prior = 0; // initialize the prior value
for (let i = 0; i < 30; i++) {
  while (i >=2 && i==30 ) {
    prior=i-1
    console.log(prior)
    num -= prior; // subtract the prior value starting from the third iteration
  }
  prior = num; // set the prior value to the current number
  num *= 3; // multiply the number by 2 each iteration
  console.log(`Iteration ${i + 1}: ${num}`); // console log the final value for each iteration
}
