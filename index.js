function moduloTest(startingNumber, stoppingNumber) {
  var currentValue = startingNumber;
  if (currentValue >= stoppingNumber) {
    return console.log(currentValue);
  }
  if (currentValue % 2 === 0) {
    console.log(currentValue);
  }
  moduloTest(currentValue+1, stoppingNumber)
}
moduloTest(1, 50);
