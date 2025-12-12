import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleOperation = async (type) => {
    // Validate inputs
    if (num1 === '' || num2 === '') {
      setResult('Please enter both numbers');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Inputs must be valid numbers');
      return;
    }

    // Determine URL and operation
    const url =
      type === 'add'
        ? 'http://localhost:8000/add'
        : 'http://localhost:9000/subtract';
    setOperation(type === 'add' ? 'Addition' : 'Subtraction');

    try {
      const response = await axios.post(url, {
        num1: n1,
        num2: n2,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>MERN Math App</h1>
      <div className="form-container">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="buttons">
          <button onClick={() => handleOperation('add')}>Add</button>
          <button onClick={() => handleOperation('subtract')}>Subtract</button>
        </div>
      </div>

      {result !== null && (
        <h2>
          {operation} Result: <span>{result}</span>
        </h2>
      )}
    </div>
  );
}

export default App;
