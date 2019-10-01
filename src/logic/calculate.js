import operate from './operate'

const calculate = (dataObj, buttonName) => {
  const regex = new RegExp('^[0-9]|[.]+$');

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
      display: '0'
    }
  } else if (buttonName === '+/-') {
    if (dataObj.total !== null) {
      return {
        display: (Number(dataObj.display) * -1).toString(),
        total: (Number(dataObj.total) * -1).toString()
      }
    } else if (dataObj.next !== null) {
      return {
        display: (Number(dataObj.display) * -1).toString(),
        next: (Number(dataObj.next) * -1).toString()
      }
    }
  }

  if (buttonName !== '=') {
    if (regex.test(buttonName)) {
      if (dataObj.total === null) {
        return {
          total: buttonName,
          display: buttonName
        }
      } else if (dataObj.total !== null && dataObj.operation === null) {
        return {
          total: dataObj.total + buttonName,
          display: dataObj.total + buttonName
        }
      }
      else if (dataObj.total !== null && dataObj.operation !== null) {
        if (dataObj.next !== null) {
          return {
            next: dataObj.next + buttonName,
            display: dataObj.next + buttonName
          }
        } else {
          return {
            next: buttonName,
            display: buttonName
          }
        }
      }
    } else {
      if (dataObj.operation === null) {
        return {
          operation: buttonName
        }
      } else {
        return {
          total: operate(dataObj.total, dataObj.next, dataObj.operation),
          display: operate(dataObj.total, dataObj.next, dataObj.operation),
          next: null,
          operation: buttonName
        }
      }
    }
  } else {
    return {
      total: operate(dataObj.total, dataObj.next, dataObj.operation) !== 'error' ? operate(dataObj.total, dataObj.next, dataObj.operation) : null,
      display: operate(dataObj.total, dataObj.next, dataObj.operation),
      next: null
    }
  }
}

export default calculate;