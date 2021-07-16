import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    marginBottom: 5,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
});
