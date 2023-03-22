function moduloTest(startingNumber, stoppingNumber) {
  var currentValue = startingNumber;

  function recursionCheck(currentValue) {
    if (currentValue % 2 === 0) {
      console.log(currentValue);
    }
    if (currentValue <= stoppingNumber) {
      recursionCheck(currentValue + 1);
    }
  }
  recursionCheck(currentValue);
}

moduloTest(1, 50);
