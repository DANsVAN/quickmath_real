export function getAvailableSigns(signs) {
  let signsArray = [];
  for (let sign of signs) {
    if (sign === "") {
    } else {
      signsArray.push(sign);
    }
  }

  return signsArray;
}

export function getRandomAvailableSign(AvailableSigns) {
  let mathProblemSign = Math.trunc(Math.random() * AvailableSigns.length);
  return AvailableSigns[mathProblemSign];
}

export function getRandomNumbers(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let maxNumber;
  let minNumber;
  if (num1 >= num2) {
    maxNumber = num1;
    minNumber = num2;
  } else {
    maxNumber = num2;
    minNumber = num1;
  }

  let RandomNum1 =
    Math.trunc(Math.random() * (maxNumber - minNumber)) + minNumber;
  let RandomNum2 =
    Math.trunc(Math.random() * (maxNumber - minNumber)) + minNumber;

  return [RandomNum1, RandomNum2];
}

export function getAnswer(num1, num2, pickedAvailableSigns) {
  let wholeNumberAnswer = 0;
  let numerator = 0;
  let denominator = 0;
  // let simplifyer;
  if (pickedAvailableSigns === "+") {
    wholeNumberAnswer = num1 + num2;
  }
  if (pickedAvailableSigns === "-") {
    wholeNumberAnswer = num1 - num2;
  }
  if (pickedAvailableSigns === "÷") {
    // wholeNumberAnswer = Math.trunc(num1 / num2);

    let num1Copy = num1;
    let num2Copy = num2;
    while (num2Copy) {
      let t = num2Copy;
      num2Copy = num1Copy % num2Copy;
      num1Copy = t;
    }
    let gdc = num1Copy;
    if (num1 >= num2) {
      numerator = num1;
      denominator = num2;
    } else {
      numerator = num2;
      denominator = num1;
    }

    if (num1 == 0) {
      num1 == 0;
      num2 == 0;
    }

    wholeNumberAnswer = Math.trunc(num1 / num2);
    numerator = num1 / gdc;
    denominator = num2 / gdc;

    if (numerator - denominator == 0) {
      wholeNumberAnswer = 1;
      numerator = 0;
      denominator = 0;
    }

    if (denominator >= 0 && numerator >= 0) {
      while (numerator > denominator) {
        numerator = numerator - denominator;
      }
    }

    if (denominator == -1) {
      denominator = 0;
      numerator = 0;
    }

    if (numerator == 1 && denominator == 1) {
      numerator = 0;
      denominator = 0;
    }
  }
  if (pickedAvailableSigns === "x") {
    wholeNumberAnswer = num1 * num2;
  }

  const problem = `${num1} ${pickedAvailableSigns} ${num2}`;

  const answer = {
    wholeNumberAnswer: wholeNumberAnswer,
    numerator: numerator,
    denominator: denominator,
  };

  console.log(answer);
  console.log(problem);
  return [answer, problem];
}
