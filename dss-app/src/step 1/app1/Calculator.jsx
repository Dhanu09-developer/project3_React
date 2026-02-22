import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Error: Division by zero');
      return;
    }
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Calculator App</h1>
        <p className="text-gray-600">Simple calculator with basic operations</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        {/* Shared Input Fields */}
        <div className="space-y-4 mb-6">
          <Input
            label="First Number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <Input
            label="Second Number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        {/* Operation Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            color="blue"
            onClick={handleAddition}
            disabled={!num1 || !num2}
          >
            Add (+)
          </Button>
          <Button
            color="green"
            onClick={handleSubtraction}
            disabled={!num1 || !num2}
          >
            Subtract (-)
          </Button>
          <Button
            color="purple"
            onClick={handleMultiplication}
            disabled={!num1 || !num2}
          >
            Multiply (×)
          </Button>
          <Button
            color="red"
            onClick={handleDivision}
            disabled={!num1 || !num2}
          >
            Divide (÷)
          </Button>
        </div>

        {/* Clear Button */}
        <Button
          color="blue"
          onClick={handleClear}
          className="bg-gray-600 hover:bg-gray-700"
        >
          Clear All
        </Button>

        {/* Result Display */}
        {result !== null && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Result:</p>
            <p className="text-2xl font-bold text-gray-800">
              {typeof result === 'number' ? result.toFixed(2) : result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
