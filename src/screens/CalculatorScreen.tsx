import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {resultSmall !== '0' && (
        <Text style={styles.resultSmall}>{resultSmall}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      {/* Row */}
      <View style={styles.row}>
        <Button txt="C" color="#9B9B9B" action={clear} />
        <Button txt="+/-" color="#9B9B9B" action={negativeToogle} />
        <Button txt="del" color="#9B9B9B" action={btnDelete} />
        <Button txt="/" color="#FF9427" action={btnDivision} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="7" action={concatNumber} />
        <Button txt="8" action={concatNumber} />
        <Button txt="9" action={concatNumber} />
        <Button txt="X" color="#FF9427" action={btnMultiplication} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="4" action={concatNumber} />
        <Button txt="5" action={concatNumber} />
        <Button txt="6" action={concatNumber} />
        <Button txt="-" color="#FF9427" action={btnSubtraction} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="1" action={concatNumber} />
        <Button txt="2" action={concatNumber} />
        <Button txt="3" action={concatNumber} />
        <Button txt="+" color="#FF9427" action={btnAddition} />
      </View>
      {/* end Row */}

      {/* Row */}
      <View style={styles.row}>
        <Button txt="0" action={concatNumber} wide />
        <Button txt="." action={concatNumber} />
        <Button txt="=" color="#FF9427" action={calculate} />
      </View>
      {/* end Row */}
    </View>
  );
};
