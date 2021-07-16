import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  txt: string;
  color?: string;
  wide?: boolean;
  action: (btnText: string) => void;
}

export const Button = ({
  txt,
  color = '#2D2D2D',
  wide = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(txt)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: wide ? 180 : 80,
        }}
      >
        <Text
          style={{
            ...styles.btnTxt,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}
        >
          {txt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
  btnTxt: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    textAlign: 'center',
  },
});
