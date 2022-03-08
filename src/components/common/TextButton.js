import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../theme/Colors';
import {LabelLarge} from '../../theme/Fonts';

const TextButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeOpacity={0.7}>
      <Text style={[LabelLarge, styles.buttonText, , props.textColor]}>
        {props.title}
      </Text>
      {props.optionalIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {color: COLORS.Primary, textAlign: 'center', fontWeight: 'bold'},
});

export default TextButton;
