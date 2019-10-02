import operate from './operate'

const calculate = (dataObj, buttonName) => {
  const regex = new RegExp('^[0-9]|[.]+$');

  if (buttonName === '.') {
    const check = (obj) => {
      for (let i in obj) {
        if (obj[i] === '.') {
          return true
        }
      }
      return false
    }

    if (dataObj.total !== null && check(dataObj.total)) {
      return
    } else if (dataObj.next !== null && check(dataObj.next)) {
      return
    }
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  } else if (buttonName === '+/-') {
    if (dataObj.total !== null && dataObj === null) {
      return {
        total: (Number(dataObj.total) * -1).toString()
      }
    } else if (dataObj.next !== null) {
      return {
        next: (Number(dataObj.next) * -1).toString()
      }
    }
  }

  if (buttonName !== '=') {
    if (regex.test(buttonName)) {
      if (dataObj.total === null) {
        return {
          total: buttonName
        }
      } else if (dataObj.total !== null && dataObj.operation === null) {
        return {
          total: dataObj.total + buttonName
        }
      }
      else if (dataObj.total !== null && dataObj.operation !== null) {
        if (dataObj.next !== null) {
          return {
            next: dataObj.next + buttonName
          }
        } else {
          return {
            next: buttonName
          }
        }
      }
    } else {
      if (dataObj.operation === null) {
        if (dataObj.total !== null && dataObj.total.slice(-1) === '.') {
          return {
            total: dataObj.total + '0',
            operation: buttonName
          }
        } else {
          return {
            operation: buttonName
          }
        }
      } else if (dataObj.operation !== null && dataObj.next === null) {
        return {
          operation: buttonName
        }
      }
      else {
        return {
          total: operate(dataObj.total, dataObj.next, dataObj.operation),
          next: null,
          operation: buttonName
        }
      }
    }
  } else {
    return {
      total: operate(dataObj.total, dataObj.next, dataObj.operation) !== 'error' ? operate(dataObj.total, dataObj.next, dataObj.operation) : null,
      next: null
    }
  }
}

export default calculate;