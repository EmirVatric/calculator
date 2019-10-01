import Big from 'big.js'

const operate = (numberOne, numberTwo, operator) => {
  const regex = new RegExp('[.]{2,}');

  if (regex.test(numberOne) || regex.test(numberTwo)) {
    return 'error'
  } else {
    let numOne = numberOne === null ? Big(0) : Big(numberOne)
    let numTwo = numberTwo === null ? Big(0) : Big(numberTwo)


    switch (operator) {
      case "+":
        return numOne.plus(numTwo).toString();

      case "-":
        return numOne.minus(numTwo).toString();

      case "x":
        return numOne.times(numTwo).toString();

      case "/":
        return numOne.div(numTwo).toString();

      case "%":
        return (numOne / 100) * numTwo

      default:
        return 'error'

    }
  }


}

export default operate;