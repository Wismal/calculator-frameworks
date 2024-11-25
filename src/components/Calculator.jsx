import { useState } from 'react'
import { Display } from './Display'
import { Keypad } from './Keypad'

export const Calculator = () => {
  const [currentInp, setCurrentInp] = useState('0')
  const [previousInp, setPreviousInput] = useState('')
  const [operator, setOperator] = useState(null)
  const [resetScreen, setResetScreen] = useState(false)

  const addToDisplay = (value) => {
    if (currentInp === '0' || resetScreen) {
      setCurrentInp(value)
      setResetScreen(false)
    } else {
      setCurrentInp(currentInp + value)
    }
  }

  const calculate = () => {
    let result = 0
    const currentNum = parseFloat(currentInp)
    const previousNum = parseFloat(previousInp)

    switch (operator) {
      case '+':
        result = previousNum + currentNum
        break
      case '-':
        result = previousNum - currentNum
        break
      case '*':
        result = previousNum * currentNum
        break
      case '/':
        result = previousNum / currentNum
        break
      default:
        return
    }

    return result.toFixed(10).toString()
  }

  const handleOperation = (op) => {
    if (operator === null) {
      const result = calculate()
      setCurrentInp(result || '0')
    }

    setPreviousInput(currentInp)
    setOperator(op)
    setResetScreen(true)
  }

  const handleEqual = () => {
    if (!operator) return

    const result = calculate()
    setCurrentInp(result || '0')
    setResetScreen(true)
    setPreviousInput('')
    setOperator(null)
  }

  const handleReset = () => {
    setCurrentInp('0')
    setPreviousInput('')
    setOperator(null)
    setResetScreen(false)
  }

  const handleDelete = () => {
    if (currentInp.length > 1) {
      setCurrentInp(currentInp.slice(0, -1))
    } else {
      setCurrentInp('0')
    }
    setResetScreen(true)
  }

  return (
    <>
      <Display value={currentInp} />
      <Keypad
        onNumberClick={addToDisplay}
        onOperationClick={handleOperation}
        onEqualClick={handleEqual}
        onResetClick={handleReset}
        onDeleteClick={handleDelete}
      />
    </>
  )
}
