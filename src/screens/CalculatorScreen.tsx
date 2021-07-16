import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('0');
  const [resultSmall, setResultSmall] = useState('0');

  const clear = () => {
    setResult('0');
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
      setResult(result + btnText);
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

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{resultSmall}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      {/* Row */}
      <View style={styles.row}>
        <Button txt="C" color="#9B9B9B" action={clear} />
        <Button txt="+/-" color="#9B9B9B" action={negativeToogle} />
        <Button txt="del" color="#9B9B9B" action={btnDelete} />
        <Button txt="/" color="#FF9427" action={clear} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="7" action={concatNumber} />
        <Button txt="8" action={concatNumber} />
        <Button txt="9" action={concatNumber} />
        <Button txt="X" color="#FF9427" action={clear} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="4" action={concatNumber} />
        <Button txt="5" action={concatNumber} />
        <Button txt="6" action={concatNumber} />
        <Button txt="-" color="#FF9427" action={clear} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="1" action={concatNumber} />
        <Button txt="2" action={concatNumber} />
        <Button txt="3" action={concatNumber} />
        <Button txt="+" color="#FF9427" action={clear} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="0" action={concatNumber} wide />
        <Button txt="." action={concatNumber} />
        <Button txt="=" color="#FF9427" action={clear} />
      </View>
      {/* end Row */}
    </View>
  );
};
