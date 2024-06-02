import React, { useState } from 'react';
import Display from './display'; 
import Key from './key';
import '../style.css';
// The above code will import all the components and libraries mentioned.

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(''); // Use state is used to manage the displayValue

  const appendToDisplay = (input) => {
    setDisplayValue(displayValue + input); //This code is used to display the input value in display component
  };

  const clearDisplay = () => {
    setDisplayValue(''); // clears the display value
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString()); //Evalutes the input value and displays the result
    } catch {
      setDisplayValue('Error'); //If an error occurs it'll display 'error' message
    }
  };

  const clearDigit = () => {
    setDisplayValue(displayValue.slice(0, -1)); // This will clear only last digit of the displayed value
  };

  const changeSign = () => {
    setDisplayValue((parseFloat(displayValue) * -1).toString()); //This will change the sign of the displayed value 
  };

  

  return ( //This will create buttons for all the above mentioned functions and returns them
    <div id="calculator">
      <Display value={displayValue} />
      <div id="keys">
        <Key onClick={clearDisplay} className="operator-btn">AC</Key>
        <Key onClick={clearDigit} className="operator-btn">C</Key>
        <Key onClick={changeSign} className="operator-btn">+/-</Key>
        <Key onClick={() => appendToDisplay('/')} className="operator-btn">/</Key>

        <Key onClick={() => appendToDisplay('7')}>7</Key>
        <Key onClick={() => appendToDisplay('8')}>8</Key>
        <Key onClick={() => appendToDisplay('9')}>9</Key>
        <Key onClick={() => appendToDisplay('*')} className="operator-btn">*</Key>

        <Key onClick={() => appendToDisplay('4')}>4</Key>
        <Key onClick={() => appendToDisplay('5')}>5</Key>
        <Key onClick={() => appendToDisplay('6')}>6</Key>
        <Key onClick={() => appendToDisplay('-')} className="operator-btn">-</Key>

        <Key onClick={() => appendToDisplay('1')}>1</Key>
        <Key onClick={() => appendToDisplay('2')}>2</Key>
        <Key onClick={() => appendToDisplay('3')}>3</Key>
        <Key onClick={() => appendToDisplay('+')} className="operator-btn">+</Key>

        <Key onClick={() => appendToDisplay('0')} style={{ gridColumn: 'span 2' }}>0</Key>
        <Key onClick={() => appendToDisplay('.')}>.</Key>
        <Key onClick={calculate}>=</Key>
      </div>
    </div>
  );
};

export default Calculator;
// exports the calculator.js file for other files to use it