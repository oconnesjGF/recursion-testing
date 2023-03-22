function moduloTest(startingNumber, stoppingNumber, modDivisor) {
  var currentValue = startingNumber;
  if (currentValue >= stoppingNumber) {
    console.log(`${currentValue} % ${modDivisor} has no remainder.`);
    return;
  }
  if (currentValue % modDivisor === 0) {
    console.log(`${currentValue} % ${modDivisor} has no remainder.`);
  }
  moduloTest(currentValue+1, stoppingNumber,modDivisor)
}
moduloTest(1, 50, 2);
