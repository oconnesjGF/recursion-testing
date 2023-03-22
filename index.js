function moduloTest(startingNumber, stoppingNumber) {
  var currentValue = startingNumber;
  //console.log(`The Current Value is: ${currentValue}.`);

  if (currentValue === stoppingNumber) {
    // console.log(`Current Value: ${currentValue}. Is equal to the Stopping Number: ${stoppingNumber}.`);
    return;
  }
  if (currentValue < stoppingNumber) {
    // console.log(`Current Value: ${currentValue}. Is less than the Stopping Number: ${stoppingNumber}.`);
    if (currentValue % 3 === 0) {
      console.log(currentValue);
      moduloTest(currentValue + 1, stoppingNumber);
    } else {
      moduloTest(currentValue + 1, stoppingNumber);
    }
  }
}

moduloTest(1, 50);
