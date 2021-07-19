import { useRef, useState } from 'react';

enum Operations {
  addition,
  subtraction,
  multiplication,
  division,
}

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [resultSmall, setResultSmall] = useState('0');

  const operation = useRef<Operations>();

  const clear = () => {
    setResult('0');
    setResultSmall('0');
  };

  const concatNumber = (btnText: string) => {
    // Avoid double dot
    if (result.includes('.') && btnText === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      // Allow dot once
      if (btnText === '.') {
        setResult(result + btnText);
        // Allow extra 0 after dot
      } else if (btnText === '0' && result.includes('.')) {
        setResult(result + btnText);
        // Allow other numbers after dot
      } else if (btnText !== '0' && !result.includes('.')) {
        setResult(btnText);
        //Avoid extra 0 before dot
      } else if (btnText === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + btnText);
      }
    } else {
      if (result === 'Error! Division by zero') {
        setResult(btnText);
      } else {
        setResult(result + btnText);
      }
    }
  };

  const negativeToogle = () => {
    if (!result.includes('-')) {
      setResult('-' + result);
    } else {
      setResult(result.replace('-', ''));
    }
  };

  const btnDelete = () => {
    if (result.length === 1 || (result.includes('-') && result.length === 2)) {
      setResult('0');
    } else {
      setResult(result.slice(0, result.length - 1));
    }
  };

  const updateResultSmall = () => {
    if (result.endsWith('.')) {
      setResultSmall(result.slice(0, -1));
    } else {
      if (result === 'Error! Division by zero') {
        setResultSmall('0');
      } else {
        setResultSmall(result);
      }
    }

    setResult('0');
  };

  const btnDivision = () => {
    operation.current = Operations.division;
    updateResultSmall();
  };
  const btnMultiplication = () => {
    operation.current = Operations.multiplication;
    updateResultSmall();
  };
  const btnSubtraction = () => {
    operation.current = Operations.subtraction;
    updateResultSmall();
  };
  const btnAddition = () => {
    operation.current = Operations.addition;
    updateResultSmall();
  };

  const calculate = () => {
    //Avoid NaN on result after equals btn is pressed multiple times
    if (resultSmall === '0') return;

    const num1 = Number(result);
    const num2 = Number(resultSmall);

    switch (operation.current) {
      case Operations.addition:
        setResult(`${num1 + num2}`);
        break;
      case Operations.subtraction:
        setResult(`${num2 - num1}`);
        break;
      case Operations.multiplication:
        setResult(`${num1 * num2}`);
        break;
      case Operations.division:
        if (num1 === 0) {
          setResult('Error! Division by zero');
        } else {
          setResult(`${num2 / num1}`);
        }
        break;
    }

    setResultSmall('0');
  };

  return {
    result,
    resultSmall,
    calculate,
    clear,
    negativeToogle,
    btnDelete,
    concatNumber,
    btnDivision,
    btnMultiplication,
    btnSubtraction,
    btnAddition,
  };
};
