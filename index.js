function moduloTest(startingNumber, stoppingNumber) {
  var currentValue = startingNumber;
  //console.log(`The Current Value is: ${currentValue}.`);

  if (currentValue === stoppingNumber) {
    return;
  }

  if (currentValue % 2 === 0) {
    console.log(currentValue);
    moduloTest(currentValue + 1, stoppingNumber);
  } else {
    moduloTest(currentValue + 1, stoppingNumber);
  }
}

moduloTest(1, 50);
