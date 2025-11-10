// Example for if statment:

let age = 20;
if (age > 18) {
  console.log("Eligible to vote"); // runs because condition is true
}

// Example for if...else Statement:

let marks = 45;
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail"); // runs because marks >=40 condition is true
}

// Example for if...else if...else Statement::

let grade = 85;

if (grade >= 90) {
  console.log("A Grade");
} else if (grade >= 75) {
  console.log("B Grade"); // this runs (85 is ≥ 75 and < 90)
} else if (grade >= 60) {
  console.log("C Grade");
} else {
  console.log("Fail");
}

// Example for switch case:

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // this runs
    break;
  default:
    console.log("Invalid day");
}
