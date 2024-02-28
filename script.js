var hoursSlept = Number(
  prompt("How many hours do you sleep a night? (ex. 0-12)")
);

if (hoursSlept > 12) {
  console.log("Be honest and try again");
} else if (hoursSlept >= 8) {
  console.log("Congratulations, that's a perfect amount of sleep!");
} else if (hoursSlept > 5) {
  console.log("Not bad but try aim for more sleep");
} else {
  console.log("You need to get more sleep");
}
