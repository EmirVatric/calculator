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
        if (numberTwo === '0' || numberTwo === null) {
          return '0'
        } else {
          return numOne.div(numTwo).toString();
        }

      case "%":
        if (numberTwo === null) {
          return numOne / 100
        } else {
          return numTwo / 100
        }

      default:
        return 'error'
    }
  }
}

export default operate;